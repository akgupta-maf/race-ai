# Performance Tracking - Backend API Examples

This document provides example implementations for the backend API endpoints needed to support the protected Performance Tracking page.

## Example 1: Node.js/Express Implementation

```typescript
import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Middleware to verify Azure JWT token
const verifyAzureToken = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res
      .status(401)
      .json({ hasAccess: false, message: 'Missing authorization token' });
  }

  // In production, validate the JWT token against Azure
  // Example (simplified):
  // try {
  //   const decoded = jwt.verify(token, process.env.AZURE_PUBLIC_KEY);
  //   req.user = decoded;
  //   next();
  // } catch (error) {
  //   return res.status(401).json({ hasAccess: false });
  // }

  next();
};

// Database of users with access (example)
const authorizedUsers = new Set([
  'manager@company.com',
  'director@company.com',
  'admin@company.com',
  'user@company.com',
]);

// Verify Access Endpoint
router.post(
  '/api/performance-tracking/verify-access',
  verifyAzureToken,
  (req: express.Request, res: express.Response) => {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        hasAccess: false,
        message: 'Email is required',
      });
    }

    // Check if user has access
    const hasAccess = authorizedUsers.has(email.toLowerCase());

    if (hasAccess) {
      return res.status(200).json({
        hasAccess: true,
        userId: email.toLowerCase(),
      });
    } else {
      return res.status(200).json({
        hasAccess: false,
        message:
          'Your account does not have access to Performance Tracking. Please contact your administrator.',
      });
    }
  },
);

// Batch Access Check Endpoint
router.post(
  '/api/performance-tracking/check-access-batch',
  verifyAzureToken,
  (req: express.Request, res: express.Response) => {
    const { email, resources } = req.body;

    if (!email || !Array.isArray(resources)) {
      return res.status(400).json({
        error: 'Email and resources array are required',
      });
    }

    const hasAccess = authorizedUsers.has(email.toLowerCase());
    const result = resources.reduce(
      (acc, resource) => {
        // You can have resource-specific access control here
        acc[resource] = hasAccess;
        return acc;
      },
      {} as Record<string, boolean>,
    );

    return res.status(200).json(result);
  },
);

export default router;
```

## Example 2: Python/Flask Implementation

```python
from flask import Blueprint, request, jsonify
from functools import wraps
import jwt

auth_bp = Blueprint('auth', __name__)

# Database of authorized users
AUTHORIZED_USERS = {
    'manager@company.com',
    'director@company.com',
    'admin@company.com',
    'user@company.com',
}

# Middleware to verify Azure token
def verify_azure_token(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        auth_header = request.headers.get('Authorization', '')

        if not auth_header.startswith('Bearer '):
            return jsonify({
                'hasAccess': False,
                'message': 'Missing authorization token'
            }), 401

        # In production, validate JWT against Azure
        # token = auth_header.split(' ')[1]
        # try:
        #     decoded = jwt.decode(token, AZURE_PUBLIC_KEY, algorithms=['RS256'])
        # except jwt.InvalidTokenError:
        #     return jsonify({'hasAccess': False}), 401

        return f(*args, **kwargs)

    return decorated_function

@auth_bp.route('/api/performance-tracking/verify-access', methods=['POST'])
@verify_azure_token
def verify_access():
    data = request.get_json()
    email = data.get('email', '').lower()

    if not email:
        return jsonify({
            'hasAccess': False,
            'message': 'Email is required'
        }), 400

    has_access = email in AUTHORIZED_USERS

    if has_access:
        return jsonify({
            'hasAccess': True,
            'userId': email
        }), 200
    else:
        return jsonify({
            'hasAccess': False,
            'message': 'Your account does not have access to Performance Tracking. Please contact your administrator.'
        }), 200

@auth_bp.route('/api/performance-tracking/check-access-batch', methods=['POST'])
@verify_azure_token
def check_access_batch():
    data = request.get_json()
    email = data.get('email', '').lower()
    resources = data.get('resources', [])

    if not email or not isinstance(resources, list):
        return jsonify({
            'error': 'Email and resources array are required'
        }), 400

    has_access = email in AUTHORIZED_USERS
    result = {resource: has_access for resource in resources}

    return jsonify(result), 200
```

## Example 3: Database Query Approach

If you want to check access from a database instead of a hardcoded list:

```typescript
// Assuming you have a database connection
interface UserAccessControl {
  email: string;
  hasPerformanceTrackingAccess: boolean;
  department?: string;
  role?: string;
}

async function checkUserAccess(email: string): Promise<boolean> {
  try {
    const user = await db.collection('user_access').findOne({
      email: email.toLowerCase(),
    });

    if (!user) {
      return false;
    }

    return user.hasPerformanceTrackingAccess === true;
  } catch (error) {
    console.error('Database access check failed:', error);
    return false;
  }
}

router.post('/api/performance-tracking/verify-access', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      hasAccess: false,
      message: 'Email is required',
    });
  }

  try {
    const hasAccess = await checkUserAccess(email);

    return res.status(200).json({
      hasAccess,
      message: hasAccess ? undefined : 'Access not granted',
    });
  } catch (error) {
    console.error('Access check error:', error);
    return res.status(500).json({
      hasAccess: false,
      message: 'Failed to verify access',
    });
  }
});
```

## Example 4: AD/Azure Group Membership Check

For enterprise environments using Azure AD:

```csharp
using Microsoft.Graph;
using Azure.Identity;

public class PerformanceTrackingAuthService
{
    private readonly GraphServiceClient _graphClient;
    private readonly string _requiredGroupId = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx";

    public PerformanceTrackingAuthService()
    {
        var credential = new ClientSecretCredential(
            tenantId: "your-tenant-id",
            clientId: "your-client-id",
            clientSecret: "your-client-secret"
        );

        _graphClient = new GraphServiceClient(credential);
    }

    public async Task<bool> UserHasAccessAsync(string email)
    {
        try
        {
            // Get user by email
            var users = await _graphClient.Users
                .GetAsync((requestConfiguration) =>
                {
                    requestConfiguration.QueryParameters.Filter = $"userPrincipalName eq '{email}'";
                });

            if (users?.Value?.Count == 0)
            {
                return false;
            }

            var user = users.Value[0];

            // Check if user is member of the required group
            var memberOf = await _graphClient.Users[user.Id].MemberOf.GetAsync();

            return memberOf?.Value?.Any(x =>
                x.OdataType == "#microsoft.graph.group" &&
                x.Id == _requiredGroupId
            ) ?? false;
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error checking user access: {ex.Message}");
            return false;
        }
    }
}

[ApiController]
[Route("api/[controller]")]
public class PerformanceTrackingController : ControllerBase
{
    private readonly PerformanceTrackingAuthService _authService;

    [HttpPost("verify-access")]
    [Authorize]  // Require Azure AD authentication
    public async Task<IActionResult> VerifyAccess([FromBody] AccessCheckRequest request)
    {
        if (string.IsNullOrEmpty(request.Email))
        {
            return BadRequest(new { hasAccess = false, message = "Email is required" });
        }

        var hasAccess = await _authService.UserHasAccessAsync(request.Email);

        return Ok(new
        {
            hasAccess,
            message = hasAccess ? null : "Access denied"
        });
    }
}

public class AccessCheckRequest
{
    public string Email { get; set; } = string.Empty;
}
```

## Testing the Endpoints

### Using cURL

```bash
# Test verify-access (without token - for development)
curl -X POST http://localhost:5005/api/performance-tracking/verify-access \
  -H "Content-Type: application/json" \
  -d '{"email": "user@company.com"}'

# Response
# {"hasAccess": true, "userId": "user@company.com"}

# Test with Bearer token
curl -X POST http://localhost:5005/api/performance-tracking/verify-access \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"email": "user@company.com"}'
```

### Using Postman

1. Create a POST request to `http://localhost:5005/api/performance-tracking/verify-access`
2. In Headers tab, add:
   - `Content-Type: application/json`
   - `Authorization: Bearer YOUR_TOKEN`
3. In Body tab (raw, JSON):
   ```json
   {
     "email": "user@company.com"
   }
   ```
4. Send and verify the response

## Deployment Considerations

1. **Token Validation**: Always validate Azure JWT tokens in production
2. **Rate Limiting**: Implement rate limiting on access check endpoints
3. **Caching**: Consider caching access check results for 5-10 minutes
4. **Logging**: Log all access attempts for audit purposes
5. **Monitoring**: Set up alerts for repeated failed access attempts
6. **Timeout**: Set reasonable timeouts for database queries (5-10 seconds)

## Hardcoded List vs Database vs Azure AD

| Approach            | Pros                   | Cons              | Best For                |
| ------------------- | ---------------------- | ----------------- | ----------------------- |
| **Hardcoded**       | Simple, fast           | Not scalable      | Dev/testing only        |
| **Database**        | Flexible, scalable     | Requires DB setup | Most production systems |
| **Azure AD Groups** | Enterprise standard    | Complex setup     | Large enterprises       |
| **LDAP**            | Legacy company systems | Outdated          | Legacy systems          |

## Security Best Practices

1. ✅ **Always validate on backend**, never trust frontend-only checks
2. ✅ **Use HTTPS** for all communication
3. ✅ **Validate email format** to prevent injection attacks
4. ✅ **Implement request throttling** to prevent brute force
5. ✅ **Log access attempts** for compliance and debugging
6. ✅ **Keep access token secure** in secure HTTP-only cookies when possible
7. ✅ **Set appropriate CORS headers** for your domains
8. ✅ **Never log sensitive data** like tokens or passwords
