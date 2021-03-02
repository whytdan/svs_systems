import React from 'react';
import Layout from '../../components/layout';
import Intro from "./intro";
import Features from "./features";
import Additional from "./additional";
import Counters from "./counters";
import ServicesList from "./services_list";

export default function ServicesPage() {
  return (
    <main>
      <Layout bottom_header={false}>
        <Intro/>
        <Features/>
        <Additional/>
        <Counters/>
        <ServicesList/>
      </Layout>
    </main>
  );
}
