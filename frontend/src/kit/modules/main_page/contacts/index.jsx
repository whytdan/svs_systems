import React from 'react';
import Section from '../../../components/section';

import { ContactsWrapper, Contact } from './styles';

export default function Contacts(props) {
  return (
    <Section bg_color='darkblue'>
      <ContactsWrapper>
        <Contact>
          <img src='/icons/location.png' alt='map-pin' />
          <p>Кыргызстан, г.Бишкек, ул. Фрунзе, 458</p>
        </Contact>
        <Contact>
          <img src='/icons/mail.png' alt='map-pin' />
          <p>info@svs.kg</p>
        </Contact>
        <Contact>
          <img src='/icons/phone.png' alt='map-pin' />
          <a href="tel:+996775589106">+996775589106</a>
          <a href="tel:+996557589106" style={{marginTop: 5}}>+996557589106</a>
        </Contact>
      </ContactsWrapper>
    </Section>
  );
}
