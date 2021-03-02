import React from 'react';
import Section from '../../../components/section';
import SectionHeader from '../../../components/section_header';
import Form from '../../../components/form';

export default function ContactForm(props) {
  return (
    <Section bg_color='darkgrey'>
      <SectionHeader color='white'>
        <span>Форма</span> заявки
        <Form />
      </SectionHeader>
    </Section>
  );
}
