import type { User } from '../types/auth';

const USER_STORAGE_KEY = 'auth_user';
const SESSION_STORAGE_KEY = 'auth_session';

export const authStorage = {
  // Local Storage - persists user data
  saveUser: (user: User): void => {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  },

  getUser: (): User | null => {
    const userData = localStorage.getItem(USER_STORAGE_KEY);
    return userData ? JSON.parse(userData) : null;
  },

  removeUser: (): void => {
    localStorage.removeItem(USER_STORAGE_KEY);
  },

  // Session Storage - manages authentication state
  saveSession: (token: string): void => {
    sessionStorage.setItem(SESSION_STORAGE_KEY, token);
  },

  getSession: (): string | null => {
    return sessionStorage.getItem(SESSION_STORAGE_KEY);
  },

  removeSession: (): void => {
    sessionStorage.removeItem(SESSION_STORAGE_KEY);
  },

  // Clear all auth data
  clearAll: (): void => {
    authStorage.removeUser();
    authStorage.removeSession();
  }
};
