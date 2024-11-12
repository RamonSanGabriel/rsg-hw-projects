import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PageTitle from '../../components/PageTitle/PageTitle';

const HomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>HomePage</title>
      </Helmet>
      <PageTitle title="Home" subtitle="" />
    </HelmetProvider>
  );
};

export default HomePage;
