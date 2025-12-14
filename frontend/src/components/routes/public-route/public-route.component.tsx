import React, { FC, PropsWithChildren } from 'react';
import { useAuth } from '../../../context/auth.context';
import { Navigate } from 'react-router-dom';

const PublicRoute: FC<PropsWithChildren> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (typeof isAuthenticated === 'boolean' && isAuthenticated) {
    return <Navigate to={'/products'} replace />;
  }

  return <>{children}</>;
};

export default PublicRoute;