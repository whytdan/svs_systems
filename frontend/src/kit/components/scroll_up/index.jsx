import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { ScrollButton } from './styles';

export default function ScrollUp() {
  return (
    <ScrollToTop showUnder={160}>
      <ScrollButton type='button'>⬆</ScrollButton>
    </ScrollToTop>
  );
}
