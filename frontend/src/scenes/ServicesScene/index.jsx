import React from 'react';
import { Helmet } from 'react-helmet';
import ServicesPage from "../../kit/modules/services_page";

export default function ServicesScene() {
  return (
    <>
      <Helmet>
        <title>Услуги</title>
      </Helmet>
      <ServicesPage />
    </>
  );
}
