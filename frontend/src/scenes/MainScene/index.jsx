import React from 'react';
import { Helmet } from 'react-helmet';
import MainPage from '../../kit/modules/main_page';

export default function MainScene() {
  return (
    <>
      <Helmet>
        <title>Главная</title>
      </Helmet>
      <MainPage />
    </>
  );
}
