import React from 'react';
import withProvider from '~src/redux/store/withProvider';
import AppLayout from '~src/components/common/Layout/AppLayout';

export const wrapRootElement = withProvider;

// eslint-disable-next-line import/prefer-default-export
export const wrapPageElement = ({ element, props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <AppLayout {...props}>{element}</AppLayout>
);
