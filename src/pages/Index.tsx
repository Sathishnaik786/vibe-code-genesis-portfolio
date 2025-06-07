
import React from 'react';
import { Navigate } from 'react-router-dom';

const Index = () => {
  // Redirect to home page since we're now using separate pages
  return <Navigate to="/" replace />;
};

export default Index;
