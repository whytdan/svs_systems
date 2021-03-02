import React from 'react';
import Layout from '../../components/layout';
import WeOffer from './we_offer';
import Features from './features';
import Projects from './projects';
import Languages from './languages';
import Blog from './blog';
import Partners from './partners';
import GoogleMap from '../../components/google_map';
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
        {/* <Languages /> */}
        <Blog />
        <Partners />
        {/* <GoogleMap /> */}
        <TwoGisMap/>
        <Contacts />
        <ContactForm />
      </main>
    </Layout>
  );
}
