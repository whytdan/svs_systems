import React from 'react';
import Layout from '../../components/layout';
import LocalizationServices from "./localizationServices";
import OnTimeDelivery from "./on-time-delivery";
import LanguageTraining from "./language_training";
import Languages from '../main_page/languages';

export default function LanguagesPage() {
  return (
    <Layout bottom_header={false}>
      <main>
        {/* <LocalizationServices/>
        <OnTimeDelivery/>
        <LanguageTraining/> */}

        <Languages service={"КОНЦЕПТУАЛЬНЫЕ ВОПРОСЫ"}/>
        <div style={{height: 100, backgroundColor:'#CFD8DB'}}></div>
        <Languages service={"ТЕХНИКА И АППАРАТУРА"}/>
        <div style={{height: 100, backgroundColor:'#CFD8DB'}}></div>
        <Languages service={"ДРУГИЕ УСЛУГИ"}/>
      </main>
    </Layout>
  );
}
