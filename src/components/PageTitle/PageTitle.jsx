import React from 'react';

const PageTitle = ({ title, subtitle }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </div>
  );
};

export default PageTitle;
