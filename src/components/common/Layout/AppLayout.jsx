import React from 'react';
import PropTypes from 'prop-types';
import { GlobalStyle } from '~src/styles';

const AppLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
