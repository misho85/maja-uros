import React from 'react';
import PropTypes from 'prop-types';
import Provider from './provider';

const withProvider = ({ element }) => <Provider>{element}</Provider>;

withProvider.propTypes = {
  element: PropTypes.node.isRequired,
};

export default withProvider;
