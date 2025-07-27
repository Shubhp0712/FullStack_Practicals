export interface User {
  id: string;
  email: string;
  name: string;
  userType: 'admin' | 'user';
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  userType: 'admin' | 'user';
}

export interface FormErrors {
  [key: string]: string;
}
