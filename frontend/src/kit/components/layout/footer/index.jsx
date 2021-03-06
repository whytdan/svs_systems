import { render } from '@testing-library/react';
import React from 'react';
import { Link } from '@reach/router';
import { FooterLinks, LogoImg, Copyright, StyledFooter } from './styles';

export default function Footer() {
  return (
    <StyledFooter>
      <FooterLinks>
        <a href='https://www.facebook.com/svs.kg/' target="_blank">
          <LogoImg src='/icons/fb.svg' alt='facebook-logo' />
        </a>
        <a href='https://www.instagram.com/svs_systems.kg/' target="_blank">
          <LogoImg src='/icons/instagram.svg' alt='instagram-logo' />
        </a>

        <a href="tg://resolve?domain=svssystems" target="_blank">
          <LogoImg src='/icons/telegram.svg' alt='telegram-logo' />
        </a>

        <a href="https://wa.me/+996775589106" target="_blank">
          <LogoImg src='/icons/whatsapp.svg' alt='whatsapp-logo' />
        </a>

      </FooterLinks>
      <Copyright>SVS systems © 2021 • Privacy Policy</Copyright>
    </StyledFooter>
  );
}
