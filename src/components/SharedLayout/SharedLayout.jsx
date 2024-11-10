import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <Header />

      <Outlet />
      {/* Outlet is a special component from react-router-dom that renders the current route */}
    </div>
  );
};

export default SharedLayout;
