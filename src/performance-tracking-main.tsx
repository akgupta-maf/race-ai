import { MsalProvider } from '@azure/msal-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import PerformanceTrackingApp from './PerformanceTrackingApp';
import './styles/main.css';
import { msalInstance } from './utils/msalConfig';

const root = ReactDOM.createRoot(
  document.getElementById('performance-tracking-root')!,
);

const renderApp = async () => {
  try {
    // Handle redirect response after Azure login
    await msalInstance.handleRedirectPromise();
  } catch (error) {
    console.error('MSAL redirect handling error:', error);
  }

  root.render(
    <React.StrictMode>
      <MsalProvider instance={msalInstance}>
        <PerformanceTrackingApp />
      </MsalProvider>
    </React.StrictMode>,
  );
};

renderApp();
