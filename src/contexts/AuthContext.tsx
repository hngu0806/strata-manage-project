import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'resident' | 'admin';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

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

  const login = async (email: string, password: string) => {
    try {
      // Here you would typically make an API call to your backend
      // For demo purposes, we'll simulate a successful login
      const mockUser: User = {
        id: '1',
        name: 'John Doe',
        email: email,
        role: 'resident'
      };

      // Set user session cookie (expires in 7 days)
      Cookies.set('user_session', JSON.stringify(mockUser), { expires: 7 });
      setUser(mockUser);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
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