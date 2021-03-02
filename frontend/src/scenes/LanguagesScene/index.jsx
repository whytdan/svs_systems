import React from 'react';
import {Helmet} from 'react-helmet';
import LanguagesPage from "../../kit/modules/languages_page";

export default function LanguagesScene() {
  return (
    <>
      <Helmet>
        <title>Языки</title>
      </Helmet>
      <LanguagesPage/>
    </>
  );
}
