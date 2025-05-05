import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

interface User {
  id: string;
  username: string;
  email: string;
  role: 'resident' | 'admin';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signUp: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Helper function to get users from localStorage
const getUsers = (): { [key: string]: { username: string; email: string; password: string } } => {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : {};
};

// Helper function to save users to localStorage
const saveUsers = (users: { [key: string]: { username: string; email: string; password: string } }) => {
  localStorage.setItem('users', JSON.stringify(users));
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Check for existing session cookie
    const sessionCookie = Cookies.get('user_session');
    const themeCookie = Cookies.get('theme_preference');
    
    if (sessionCookie) {
      try {
        const userData = JSON.parse(sessionCookie);
        setUser(userData);
      } catch (error) {
        console.error('Error parsing user session:', error);
        Cookies.remove('user_session');
      }
    }

    if (themeCookie) {
      setTheme(themeCookie as 'light' | 'dark');
    }
  }, []);

  const signUp = async (username: string, email: string, password: string) => {
    const users = getUsers();

    // Check if username or email already exists
    if (Object.values(users).some(user => user.username === username)) {
      throw new Error('Username already exists');
    }
    if (Object.values(users).some(user => user.email === email)) {
      throw new Error('Email already registered');
    }

    // Save new user
    users[email] = { username, email, password };
    saveUsers(users);
  };

  const login = async (email: string, password: string) => {
    const users = getUsers();
    const user = users[email];

    if (!user || user.password !== password) {
      throw new Error('Invalid email or password');
    }

    const userData: User = {
      id: email, // Using email as ID for simplicity
      username: user.username,
      email: user.email,
      role: 'resident'
    };

    // Set user session cookie (expires in 7 days)
    Cookies.set('user_session', JSON.stringify(userData), { expires: 7 });
    setUser(userData);
  };

  const logout = () => {
    Cookies.remove('user_session');
    setUser(null);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    Cookies.set('theme_preference', newTheme, { expires: 365 }); // Store theme preference for 1 year
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      signUp,
      logout,
      isAuthenticated: !!user,
      theme,
      toggleTheme
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 