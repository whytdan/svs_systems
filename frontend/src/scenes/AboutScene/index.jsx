import React from 'react';
import { Helmet } from 'react-helmet';
import AboutPage from '../../kit/modules/about_page';

export default function AboutScene() {
  return (
    <>
      <Helmet>
        <title>О нас</title>
      </Helmet>
      <AboutPage />
    </>
  );
}
