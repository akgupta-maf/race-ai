import { useAuth } from '@/contexts/AuthContext';
import { accessCheckService } from '@/services/accessCheckService';
import React, { useEffect, useState } from 'react';
import Loader from './Loader';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, userEmail, login } = useAuth();
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkAccess = async (): Promise<void> => {
      if (!isAuthenticated || !userEmail) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const result = await accessCheckService.verifyAccess(userEmail);
        setHasAccess(result.hasAccess);
        if (!result.hasAccess) {
          setError(result.message || 'User does not have access to this page');
        }
      } catch (err) {
        console.error('Access check error:', err);
        setError('Failed to verify access. Please try again later.');
        setHasAccess(false);
      } finally {
        setLoading(false);
      }
    };

    checkAccess();
  }, [isAuthenticated, userEmail]);

  // Loading state
  if (loading) {
    return <Loader />;
  }

  // Not authenticated
  if (!isAuthenticated) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-gray-50 px-4'>
        <div className='rounded-lg border border-gray-200 bg-white p-8 text-center shadow-md'>
          <h1 className='mb-4 text-2xl font-bold text-gray-800'>
            Authentication Required
          </h1>
          <p className='mb-6 text-gray-600'>
            You need to sign in with your Microsoft account to access this page.
          </p>
          <button
            onClick={login}
            className='rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition hover:bg-blue-700'
          >
            Sign in with Microsoft
          </button>
        </div>
      </div>
    );
  }

  // Authenticated but no access
  if (hasAccess === false) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-gray-50 px-4'>
        <div className='rounded-lg border border-red-200 bg-white p-8 text-center shadow-md'>
          <h1 className='mb-4 text-2xl font-bold text-red-600'>
            Access Denied
          </h1>
          <p className='mb-6 text-gray-600'>
            {error || 'You do not have access to view this page.'}
          </p>
          <p className='text-sm text-gray-500'>
            If you believe this is a mistake, please contact your administrator.
          </p>
        </div>
      </div>
    );
  }

  // Authenticated and has access
  return <>{children}</>;
};

export default ProtectedRoute;
