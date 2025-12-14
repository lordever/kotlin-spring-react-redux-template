import { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { clearToken, getToken } from '../services/token.service';
import { AuthResponse } from '../models/auth/auth.model';
import { authService } from '../services/api/auth.service';

interface AuthValue extends AuthResponse {
  isAuthenticated?: boolean;
}

interface AuthContextValue extends AuthValue {
  login: (email: string, password: string) => Promise<AuthResponse>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<AuthValue>({
    isAuthenticated: undefined,
  });

  useEffect(() => {
    const token = getToken();
    if (token) {
      setState({
        isAuthenticated: true,
        token,
        message: undefined,
      });
    } else {
      setState({
        isAuthenticated: false,
        token: undefined,
        message: undefined,
      });
    }
  }, []);


  const login = async (email: string, password: string) => {
    const { message, token }: AuthResponse = await authService.login({
      email,
      password,
    });
    setState({
      isAuthenticated: !!token,
      token,
      message,
    });

    return { message, token };
  };

  const logout = () => {
    clearToken();
    setState({
      isAuthenticated: false,
      token: undefined,
      message: undefined,
    });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>{children}</AuthContext.Provider>
  );
};

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return ctx;
}