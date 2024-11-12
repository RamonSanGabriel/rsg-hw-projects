import React from 'react';

import { Helmet, HelmetProvider } from 'react-helmet-async';
import PageTitle from '../../components/PageTitle/PageTitle';
import Projects from '../../components/Projects/Projects';

const Homeworks = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Homeworks</title>
        </Helmet>
        <PageTitle title="Homeworks" subtitle="" />
      </HelmetProvider>
      <Projects />
    </div>
  );
};

export default Homeworks;
