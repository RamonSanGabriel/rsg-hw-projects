import React, { Suspense } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const SharedLayout = () => {
  return (
    <div style={{ margin: '0 16px' }}>
      <Header />
      <Suspense>
        <Outlet />
        {/* Outlet is a special component from react-router-dom that renders the current route */}
      </Suspense>
      <Footer />
    </div>
  );
};

export default SharedLayout;
