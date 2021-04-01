import React from 'react';
import { Helmet } from 'react-helmet';
import ContactPage from '../../kit/modules/contact_page';

export default function MainScene() {
  return (
    <>
      <Helmet>
        <title>Контакты</title>
      </Helmet>
      <ContactPage />
    </>
  );
}
