# Performance Tracking Protected Page - Quick Start Guide

## What Changed?

The Performance Tracking page is now:

- ✅ **Separated**: Opens in a new tab
- ✅ **Authenticated**: Requires Microsoft login
- ✅ **Authorized**: Only users with access can view it
- ✅ **Secure**: Backend API validates all requests

## Quick Setup (5 minutes)

### 1. Environment Variables

Your `.env` file already has MSAL keys configured:

```
VITE_MSAL_CLIENT_ID=e14f8027-8262-440e-a4c9-d610b2ba59d6
VITE_MSAL_TENANT_ID=0df535d9-521f-46ef-b318-d53cc372f469
VITE_MSAL_REDIRECT_URI=http://localhost:3000/performance-tracking.html
VITE_API_USER_URL=http://localhost:5005
```

**For Production**: Update the redirect URI and API URL to your production domains.

### 2. Backend Setup

Implement the `/api/performance-tracking/verify-access` endpoint. See `BACKEND_API_EXAMPLES.md` for code samples in:

- Node.js/Express
- Python/Flask
- C#/.NET
- Or your preferred framework

**Endpoint Requirements:**

```
POST /api/performance-tracking/verify-access
Content-Type: application/json

{
  "email": "user@company.com"
}

Response:
{
  "hasAccess": true,
  "userId": "user@company.com"
}
```

### 3. Test Locally

```bash
# Terminal 1: Start the app
npm run dev

# Terminal 2: Build performance tracking (if needed)
npm run build

# Visit http://localhost:3000
# Click "Performance Tracking" in navbar
# Sign in when prompted
# Page will load if backend returns hasAccess: true
```

## Troubleshooting

### Issue: "Sign in with Microsoft" button doesn't work

**Check:**

1. Browser allows popups (check popup blocker)
2. `VITE_MSAL_CLIENT_ID` and `VITE_MSAL_TENANT_ID` are correct
3. Redirect URI matches exactly (including port and path)

**Solution:**

- Enable popups for localhost
- Or switch to redirect flow in `AuthContext.tsx` (see comments)

### Issue: "Access Denied" message appears

**The backend said the user doesn't have access.**

**Check:**

1. Is the email in your authorized users list/database?
2. Is `VITE_API_USER_URL` correct?
3. Does the backend endpoint exist and respond correctly?

**Debug:**

```bash
# Test the backend endpoint directly
curl -X POST http://localhost:5005/api/performance-tracking/verify-access \
  -H "Content-Type: application/json" \
  -d '{"email": "user@company.com"}'

# Should return:
# {"hasAccess": true} or {"hasAccess": false, "message": "..."}
```

### Issue: CORS errors in console

**The frontend can't reach the backend API.**

**Fixes:**

1. Verify `VITE_API_USER_URL` is accessible
2. Add CORS headers to backend:
   ```
   Access-Control-Allow-Origin: http://localhost:3000
   Access-Control-Allow-Methods: POST, OPTIONS
   Access-Control-Allow-Headers: Content-Type, Authorization
   ```
3. Or use a proxy in dev

### Issue: Login succeeds but then page shows "Authentication Required"

**The user is logged in but ProtectedRoute isn't recognizing it.**

**Check:**

1. Browser DevTools > Application > LocalStorage
2. Look for keys like `msal.xx.tokens.accesstoken`
3. If missing, MSAL provider might not be working

**Solution:**

- Check MSAL redirect URI in `.env`
- Verify Azure MSAL keys are correct
- Check browser console for MSAL errors

## File Structure

```
race_ai/
├── src/
│   ├── contexts/
│   │   └── AuthContext.tsx              # Auth state management
│   ├── components/
│   │   ├── ProtectedRoute.tsx           # Auth guard wrapper
│   │   └── PerformanceTrackingHeader.tsx # User info & logout
│   ├── services/
│   │   └── accessCheckService.ts        # API communication
│   ├── utils/
│   │   └── msalConfig.ts                # MSAL setup
│   ├── pages/
│   │   └── PerformanceTracking.tsx      # Protected page
│   ├── PerformanceTrackingApp.tsx       # Standalone app
│   ├── performance-tracking-main.tsx    # Standalone entry
│   ├── App.tsx                          # Main app (updated)
│   └── main.tsx                         # Main entry
├── performance-tracking.html            # Standalone HTML
├── index.html                           # Main app HTML
├── vite.config.ts                       # Build config (updated)
├── .env                                 # Environment (updated)
├── .env.production                      # Production env (updated)
│
├── PERFORMANCE_TRACKING_AUTH_SETUP.md   # Full documentation
├── BACKEND_API_EXAMPLES.md              # Backend samples
└── QUICK_START.md                       # This file
```

## Next Steps

1. **Backend Implementation**
   - Implement `/api/performance-tracking/verify-access` endpoint
   - Add your access control logic (database, Azure AD, etc.)
   - Test with cURL or Postman

2. **Update Environment Variables**
   - Production URLs for API and redirect URI
   - Update MSAL keys if using different Azure app registration

3. **Deploy**
   - Build: `npm run build`
   - Deploy `dist/` folder to your web server
   - Performance Tracking will be at `yoursite.com/performance-tracking.html`

4. **Monitor & Debug**
   - Check browser console for errors
   - Check backend logs for access attempts
   - Monitor unauthorized access attempts

## Common Tasks

### Add a User to Access List (Database Method)

```javascript
// Example: Add user to database
db.collection('user_access').updateOne(
  { email: 'newuser@company.com' },
  {
    $set: {
      email: 'newuser@company.com',
      hasPerformanceTrackingAccess: true,
      addedDate: new Date(),
    },
  },
  { upsert: true },
);
```

### Change Logout Redirect

In `PerformanceTrackingHeader.tsx`:

```typescript
// After logout, redirect to home instead of /
window.location.href = '/'; // Change this URL
```

### Customize Access Denied Message

In `ProtectedRoute.tsx`:

```typescript
{
  error || 'Custom message here';
}
```

### Add Role-Based Access

Update `accessCheckService.ts`:

```typescript
async verifyAccess(email: string): Promise<AccessCheckResponse> {
  // Get user role from backend
  const result = await fetch(...);
  const data = await result.json();

  // Check role instead of just yes/no
  return {
    hasAccess: data.role === 'admin' || data.role === 'manager',
    message: data.message
  };
}
```

## Performance Tips

1. **Cache access checks** (5-10 minutes) to reduce API calls
2. **Refresh token early** to avoid mid-session expiry
3. **Lazy load** chart/table data instead of loading everything
4. **Monitor bundle size** - MSAL adds ~50KB to bundle

## Testing Checklist

- [ ] User can login with Microsoft account
- [ ] Access granted when user is in approved list
- [ ] Access denied when user not in list
- [ ] Logout button works and clears session
- [ ] Page accessible at `localhost:3000/performance-tracking.html`
- [ ] Navbar link opens in new tab
- [ ] Works on mobile (responsive)
- [ ] Works on different browsers
- [ ] Error messages are clear
- [ ] No console errors or warnings

## Getting Help

1. **Check the documentation**: `PERFORMANCE_TRACKING_AUTH_SETUP.md`
2. **Check backend examples**: `BACKEND_API_EXAMPLES.md`
3. **Check browser console**: DevTools > Console (F12)
4. **Check network tab**: DevTools > Network > see API responses
5. **Check environment variables**: Verify `.env` file
6. **Test backend endpoint**: Use cURL or Postman

## Summary

The Performance Tracking page is now:

1. Separate app with Azure authentication
2. Protected by role/access control
3. User-friendly with clear error messages
4. Ready for enterprise use
5. Fully documented with examples

Start by implementing the backend endpoint, then test locally!
