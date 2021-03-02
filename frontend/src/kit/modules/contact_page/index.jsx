import React from 'react';
import Layout from '../../components/layout';
import GoogleMap from '../../components/google_map';
import Contacts from '../main_page/contacts';
import ContactForm from '../main_page/contact_form';
import TwoGisMap from '../../components/2gis_map';

export default function ContactPage(props) {
  return (
    <Layout bottom_header={false}>
      <main>
        {/* <GoogleMap /> */}
        <TwoGisMap/>
        <Contacts />
        <ContactForm />
      </main>
    </Layout>
  );
}
