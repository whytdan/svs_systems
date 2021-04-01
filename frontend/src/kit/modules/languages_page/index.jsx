import React from 'react';
import Layout from '../../components/layout';
import LocalizationServices from "./localizationServices";
import OnTimeDelivery from "./on-time-delivery";
import LanguageTraining from "./language_training";
import Languages from '../main_page/languages';

export default function LanguagesPage() {
  return (
    <Layout bottom_header={false} isLanguagesPage={true}>
      <main>
        <Languages service={"Английский/русский язык "}/>
      </main>
    </Layout>
  );
}
