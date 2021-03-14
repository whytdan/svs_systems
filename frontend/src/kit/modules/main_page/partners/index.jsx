import React from 'react';
import SectionHeader from '../../../components/section_header';
import { CustomersWrapper, CustomerLogoHorizontal, CustomerLogoVertical, Section } from './styles';

export default function Customers() {
  return (
    <Section bg_color=''>
      {/* <h1 style={{textAlign: 'center', marginBottom: 20, color: '#fff'}}>Партнеры</h1> */}
      <SectionHeader color="grey">
        Партнеры
      </SectionHeader>
      <CustomersWrapper>
        <CustomerLogoVertical>
          <img src='/logos/UNDP.png' alt='undp-logo' />
        </CustomerLogoVertical>
        <CustomerLogoHorizontal>
          <img src='/logos/UCA.png' alt='uca-logo' />
        </CustomerLogoHorizontal>
        <CustomerLogoHorizontal>
          <img src='/logos/civil.png' alt='civil-logo' />
        </CustomerLogoHorizontal>
        <CustomerLogoHorizontal>
          <img src='/logos/unicef.png' alt='unicef-logo' />
        </CustomerLogoHorizontal>
        <CustomerLogoVertical>
          <img src='/logos/usaid.png' alt='usaid-logo' />
        </CustomerLogoVertical>
        <CustomerLogoHorizontal>
          <img src='/logos/world-bank.jpg' alt='unicef-logo' />
        </CustomerLogoHorizontal>
        <CustomerLogoHorizontal>
          <img src='/logos/osce.png' alt='osce-logo' />
        </CustomerLogoHorizontal>
        <CustomerLogoVertical>
          <img src='/logos/boi_logo.png' alt='usaid-logo' />
        </CustomerLogoVertical>
        <CustomerLogoHorizontal>
          <img src='/logos/unodc.png' alt='osce-logo' />
        </CustomerLogoHorizontal>
        <CustomerLogoHorizontal>
          <img src='/logos/auca.jpg' alt='auca-logo' />
        </CustomerLogoHorizontal>
        <CustomerLogoHorizontal>
          <img src='/logos/IOM_Logo.png' alt='iom-logo' />
        </CustomerLogoHorizontal>
        <CustomerLogoHorizontal>
          <img src='/logos/WFD.jpg' alt='wfd-logo' />
        </CustomerLogoHorizontal>
        <CustomerLogoHorizontal>
          <img src='/logos/baker-tilly.png' alt='baker-tilly-logo' />
        </CustomerLogoHorizontal>
        <CustomerLogoHorizontal>
          <img src='/logos/UNHR.png' alt='unhr-logo' />
        </CustomerLogoHorizontal>
        {/* <CustomerLogoHorizontal>
          <img src='/logos/UNFPA.png' alt='UNFPA-logo' />
        </CustomerLogoHorizontal> */}

      </CustomersWrapper>
    </Section>
  );
}
