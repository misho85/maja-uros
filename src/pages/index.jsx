import React from 'react';
import { Layout, SEO } from '~src/components/common';
import { Hero } from '~src/components/pages/home';

const IndexPage = () => (
  <Layout>
    <SEO title="Pozivnica" />
    <Hero />
  </Layout>
);

export default IndexPage;
