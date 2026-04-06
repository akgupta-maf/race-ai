import { useMsal } from '@azure/msal-react';
import React, { createContext, ReactNode, useContext } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  userEmail: string | null;
  userName: string | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { instance, accounts } = useMsal();

  const isAuthenticated = accounts.length > 0;
  const userEmail = isAuthenticated ? accounts[0].username : null;
  const userName = isAuthenticated ? accounts[0].name || null : null;

  const login = async (): Promise<void> => {
    try {
      await instance.loginRedirect({
        scopes: ['user.read'],
      });
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await instance.logoutRedirect();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, userEmail, userName, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
