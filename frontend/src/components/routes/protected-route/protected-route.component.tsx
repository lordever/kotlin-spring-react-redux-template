import { Navigate } from 'react-router-dom';
import React, { FC, PropsWithChildren } from 'react';
import { useAuth } from '../../../context/auth.context';

const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (typeof isAuthenticated === 'boolean' && !isAuthenticated) {
    return <Navigate to={'/login'} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;