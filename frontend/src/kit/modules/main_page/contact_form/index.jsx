import React from 'react';
import Section from '../../../components/section';
import SectionHeader from '../../../components/section_header';
import Form from '../../../components/form';

export default function ContactForm(props) {
  return (
    <Section bg_color='white'>
      <SectionHeader color='grey'>
        Форма заявки
        <Form />
      </SectionHeader>
    </Section>
  );
}
