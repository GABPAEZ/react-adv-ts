import React from 'react';
import { Navigation } from '../router/Navigation';

export const LazyLayout = () => {
  return (
    <div>
      <h1>Layout * Main Page</h1>
      <Navigation />
    </div>
  );
};

export default LazyLayout;
