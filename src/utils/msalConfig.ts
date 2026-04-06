import { Configuration, PublicClientApplication } from '@azure/msal-browser';

const clientId = import.meta.env.VITE_MSAL_CLIENT_ID;
const tenantId = import.meta.env.VITE_MSAL_TENANT_ID;
const redirectUri =
  import.meta.env.VITE_MSAL_REDIRECT_URI || window.location.origin;

if (!clientId || !tenantId) {
  console.error(
    'MSAL Configuration Error: Missing required environment variables',
    {
      clientId: clientId ? 'present' : 'MISSING',
      tenantId: tenantId ? 'present' : 'MISSING',
      redirectUri,
    },
  );
}

const msalConfig: Configuration = {
  auth: {
    clientId: clientId || '',
    authority: `https://login.microsoftonline.com/${tenantId || 'common'}`,
    redirectUri,
  },
  cache: {
    cacheLocation: 'localStorage',
  },
  system: {
    allowRedirectInIframe: true,
  },
};

export const msalInstance = new PublicClientApplication(msalConfig);
