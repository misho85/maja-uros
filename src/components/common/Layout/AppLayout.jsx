import React from 'react';
import PropTypes from 'prop-types';
import { GlobalStyle } from '~src/styles';
import { Footer } from '~src/components/common';

const AppLayout = ({ children, location }) => {
  console.log('location', location);
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
      {location.pathname !== '/' && <Footer />}
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
