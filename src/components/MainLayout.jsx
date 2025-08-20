// src/components/MainLayout.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const MainLayout = () => {
  return (
    <div>
      <Navigation />
      {/* Add the className "main-content" here */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;