import React from 'react';
import Layout from '../../components/layout';
import Team from './team';
import WhyChooseUs from './why_choose_us';

export default function AboutPage() {
  return (
    <main>
      <Layout bottom_header={false}>
        <WhyChooseUs />
        <Team />
      </Layout>
    </main>
  );
}
