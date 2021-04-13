import React from 'react';
import Layout from '../../components/layout';
import WeOffer from './we_offer';
import Features from './features';
import Projects from './projects';
import Blog from './blog';
import Partners from './partners';
import Contacts from './contacts';
import ContactForm from './contact_form';
import TwoGisMap from '../../components/2gis_map';

export default function MainPage() {
  return (
    <Layout bottom_header={true}>
      <main>
        <WeOffer />
        <Features />
        <Projects />
        <Blog />
        <Partners />
        <ContactForm />
        <Contacts />
        <TwoGisMap/>
      </main>
    </Layout>
  );
}
