import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { User, AuthState, LoginFormData, SignUpFormData } from '../types/auth';
import { authStorage } from '../utils/authStorage';

interface AuthContextType extends AuthState {
  login: (formData: LoginFormData) => Promise<{ success: boolean; error?: string }>;
  signUp: (formData: SignUpFormData) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demonstration
const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@example.com',
    name: 'Admin User',
    userType: 'admin',
    createdAt: '2023-01-01T00:00:00Z'
  },
  {
    id: '2',
    email: 'user@example.com',
    name: 'Regular User',
    userType: 'user',
    createdAt: '2023-01-15T00:00:00Z'
  },
  {
    id: '3',
    email: 'john@example.com',
    name: 'John Doe',
    userType: 'user',
    createdAt: '2023-02-01T00:00:00Z'
  }
];

// Mock passwords (in real app, this would be handled securely on backend)
const mockPasswords: Record<string, string> = {
  'admin@example.com': 'Admin123!',
  'user@example.com': 'User123!',
  'john@example.com': 'John123!'
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true
  });

  // Check for stored authentication on mount
  useEffect(() => {
    const storedUser = authStorage.getUser();
    const storedSession = authStorage.getSession();

    if (storedUser && storedSession) {
      setAuthState({
        user: storedUser,
        isAuthenticated: true,
        isLoading: false
      });
    } else {
      setAuthState(prev => ({ ...prev, isLoading: false }));
    }
  }, []);

  const login = async (formData: LoginFormData): Promise<{ success: boolean; error?: string }> => {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Find user by email
      const user = mockUsers.find(u => u.email.toLowerCase() === formData.email.toLowerCase());

      if (!user) {
        return { success: false, error: 'User not found' };
      }

      // Check password
      const expectedPassword = mockPasswords[user.email];
      if (formData.password !== expectedPassword) {
        return { success: false, error: 'Invalid password' };
      }

      // Store auth data
      authStorage.saveUser(user);
      authStorage.saveSession('mock-token-' + user.id);

      // Update state
      setAuthState({
        user,
        isAuthenticated: true,
        isLoading: false
      });

      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'Login failed. Please try again.' };
    }
  };

  const signUp = async (formData: SignUpFormData): Promise<{ success: boolean; error?: string }> => {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Check if user already exists
      const existingUser = mockUsers.find(u => u.email.toLowerCase() === formData.email.toLowerCase());
      if (existingUser) {
        return { success: false, error: 'User already exists with this email' };
      }

      // Create new user
      const newUser: User = {
        id: Date.now().toString(),
        email: formData.email,
        name: formData.name,
        userType: formData.userType,
        createdAt: new Date().toISOString()
      };

      // Add to mock users (in real app, this would be sent to backend)
      mockUsers.push(newUser);
      mockPasswords[newUser.email] = formData.password;

      // Store auth data
      authStorage.saveUser(newUser);
      authStorage.saveSession('mock-token-' + newUser.id);

      // Update state
      setAuthState({
        user: newUser,
        isAuthenticated: true,
        isLoading: false
      });

      return { success: true };
    } catch (error) {
      console.error('SignUp error:', error);
      return { success: false, error: 'Sign up failed. Please try again.' };
    }
  };

  const logout = () => {
    authStorage.clearAll();
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false
    });
  };

  const contextValue: AuthContextType = {
    ...authState,
    login,
    signUp,
    logout
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
