import React from 'react';
import { Navigate } from 'react-router-dom';

interface RouteElementProps {
  element: React.ReactNode;
}

const ProtectedClientRouteElement = ({ element }: RouteElementProps) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  return isLoggedIn ? <>{element}</> : <Navigate to="/signin" replace={true} />;
};

export default ProtectedClientRouteElement;
