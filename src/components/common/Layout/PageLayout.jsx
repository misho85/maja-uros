import React from 'react';
import PropTypes from 'prop-types';

const PageLayout = ({ children }) => {
  return <>{children}</>;
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
