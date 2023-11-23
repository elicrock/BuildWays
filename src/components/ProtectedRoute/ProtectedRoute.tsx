import React from 'react';
import { Navigate } from 'react-router-dom';
// import { useAppSelector } from '../../hooks/redux';

interface RouteElementProps {
  // isLoggedIn: boolean;
  element: React.ReactNode;
}

const ProtectedClientRouteElement = ({ element }: RouteElementProps) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  // const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  return isLoggedIn ? <>{element}</> : <Navigate to="/signin" replace={true} />;
};

export default ProtectedClientRouteElement;
