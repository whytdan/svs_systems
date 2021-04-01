import React from 'react';
import Layout from '../../components/layout';
import Intro from './intro';
import Team from './team';
import WhyChooseUs from './why_choose_us';
import Features from './features';
import Testimonials from './testimonials';

export default function AboutPage() {
  return (
    <main>
      <Layout bottom_header={false}>
        {/* <Intro /> */}
        <WhyChooseUs />
        <Team />
        {/* <Features /> */}
        {/* <Testimonials /> */}
      </Layout>
    </main>
  );
}
