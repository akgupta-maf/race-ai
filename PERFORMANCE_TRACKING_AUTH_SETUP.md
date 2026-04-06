# Performance Tracking Protected Page Documentation

## Overview

The Performance Tracking page has been converted into a separate, authenticated application with the following features:

- **Authentication**: Azure MSAL (Microsoft Entra) login
- **Authorization**: Internal API-based access control check
- **Separation**: Opens in a new tab when clicked from the main app
- **Security**: Only authenticated users with proper access can view the page

## Architecture

### Components & Files

1. **Authentication Context** (`src/contexts/AuthContext.tsx`)
   - Manages user authentication state using Azure MSAL
   - Provides `useAuth` hook for accessing auth information
   - Handles login/logout operations

2. **MSAL Configuration** (`src/utils/msalConfig.ts`)
   - Configures Azure MSAL public client application
   - Uses environment variables for credentials

3. **Protected Route Component** (`src/components/ProtectedRoute.tsx`)
   - Wrapper component that protects routes from unauthorized access
   - Checks user access using the internal API
   - Shows appropriate UI based on authentication/authorization state

4. **Access Check Service** (`src/services/accessCheckService.ts`)
   - Communicates with backend API to verify user access
   - Supports single and batch access checks

5. **Performance Tracking Header** (`src/components/PerformanceTrackingHeader.tsx`)
   - Displays logged-in user information
   - Provides logout functionality

6. **Standalone App Entry Points**
   - `performance-tracking.html`: Entry HTML file for the standalone app
   - `src/performance-tracking-main.tsx`: Main entry point for the app
   - `src/PerformanceTrackingApp.tsx`: App component with auth providers

7. **Updated Main App** (`src/App.tsx`)
   - Performance Tracking route removed from main app
   - Navbar updated to open Performance Tracking in a new tab

## Environment Variables

```
# API Endpoints
VITE_API_USER_URL=http://localhost:5005

# Azure MSAL Configuration
VITE_MSAL_CLIENT_ID=your_client_id
VITE_MSAL_TENANT_ID=your_tenant_id
VITE_MSAL_REDIRECT_URI=http://localhost:3000/performance-tracking.html

# Development
VITE_APP_ENV=development
VITE_APP_BASE_URL=dev-localization

# Production
# Update accordingly for production URLs
```

## User Flow

1. **User clicks "Performance Tracking"** in the navbar
   - Link opens `performance-tracking.html` in a new tab

2. **Standalone app loads with MSAL Provider**
   - If user is not authenticated, Azure login prompt appears
   - User signs in with Microsoft account

3. **After authentication**
   - ProtectedRoute calls API to verify access
   - API checks if user email has access to Performance Tracking

4. **Access control outcomes**
   - ✅ **Has Access**: Page content is displayed
   - ❌ **No Access**: "Access Denied" message is shown
   - ⚠️ **Error**: Generic error message with retry option

## API Requirements

Your backend should implement the following endpoints:

### Verify Access Endpoint

**POST** `/api/performance-tracking/verify-access`

**Request Body:**

```json
{
  "email": "user@company.com"
}
```

**Response (Success):**

```json
{
  "hasAccess": true,
  "userId": "user_id_123"
}
```

**Response (No Access):**

```json
{
  "hasAccess": false,
  "message": "Your account does not have access to this resource"
}
```

**Response (Error):**

```json
{
  "hasAccess": false,
  "message": "Failed to verify access"
}
```

**HTTP Status Codes:**

- `200 OK`: Access check completed (regardless of result)
- `401 Unauthorized`: Invalid/missing authentication
- `403 Forbidden`: User confirmed has no access
- `500 Internal Server Error`: Server error occurred

### Batch Access Check (Optional)

**POST** `/api/performance-tracking/check-access-batch`

**Request Body:**

```json
{
  "email": "user@company.com",
  "resources": ["resource1", "resource2"]
}
```

**Response:**

```json
{
  "resource1": true,
  "resource2": false
}
```

## Security Considerations

1. **Azure MSAL Token**: The login token is stored securely in localStorage by MSAL
2. **Backend Validation**: Always verify access on the backend, not just the frontend
3. **Email Validation**: Backend should validate the email format and source
4. **HTTPS Only**: Use HTTPS in production
5. **CORS**: Configure CORS properly for both main app and performance tracking URLs

## Development Setup

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build all entry points
npm build

# The build will create:
# dist/index.html (main app)
# dist/performance-tracking.html (standalone page)
```

## Customization

### Changing Access Control Logic

Update `src/services/accessCheckService.ts` to match your backend implementation:

```typescript
async verifyAccess(email: string): Promise<AccessCheckResponse> {
  // Customize API endpoint and request/response handling
  const response = await fetch(
    `${import.meta.env.VITE_API_USER_URL}/api/your-endpoint`,
    // ... customize
  );
  return await response.json();
}
```

### Customizing Error Messages

Update error messages in `src/components/ProtectedRoute.tsx`:

```typescript
// "Access Denied" message
{
  error || 'You do not have access to view this page.';
}

// "Authentication Required" section
// "Sign in with Microsoft" button text
```

### Customizing User Header

Modify `src/components/PerformanceTrackingHeader.tsx` to:

- Change avatar styling
- Add additional user info
- Customize menu options

## Troubleshooting

### Issue: MSAL login popup blocked

- **Solution**: Check browser popup blocker settings
- **Alternative**: Use redirect flow instead of popup in `AuthContext.tsx`

### Issue: "Unauthorized" when accessing page

- **Solution**: Check `VITE_MSAL_CLIENT_ID` and `VITE_MSAL_TENANT_ID` are correct
- **Solution**: Verify redirect URI matches exactly (including trailing slash)

### Issue: CORS errors from backend

- **Solution**: Update backend CORS policy to allow the performance tracking URL
- **Example**: `Access-Control-Allow-Origin: http://localhost:3000`

### Issue: Session expires

- **Solution**: MSAL automatically handles token refresh
- **Fallback**: User can close and reopen the tab to re-authenticate

## Future Enhancements

1. **Role-based Access**: Instead of just yes/no, support role-based permissions
2. **Feature Flags**: Control feature access at the API level
3. **Audit Logging**: Log all access attempts for compliance
4. **Session Management**: Implement explicit session timeouts
5. **SSO Integration**: Integrate with other enterprise SSO providers
6. **Export Data**: Add export functionality with access logs

## Support

For issues or questions about the implementation:

1. Check error messages in browser console
2. Review environment variable configuration
3. Verify backend API endpoints are working
4. Test with `curl` to isolate frontend vs backend issues
