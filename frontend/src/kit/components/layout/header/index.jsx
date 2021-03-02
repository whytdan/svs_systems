import PT from 'prop-types';
import React, { useState, useEffect } from 'react';
import BottomHeader from './bottom_header';
import ScrollHeader from './scroll_header';
import UpperHeader from './upper_header';
import BurgerMenu from './burger_menu';
import { Backdrop, StyledHeader } from './styles';

//TODO: add changing background, white triangles at the bottom, BurgerMenu, ScrollHeader disappear animation
export default function Header(props) {
  const [scrollHeader, setScrollHeader] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect((_) => {
    const handleScroll = () => {
      if (window.pageYOffset > 160) {
        setScrollHeader(true);
      } else {
        setScrollHeader(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return (_) => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <>
      <BurgerMenu open={openMenu} setOpenMenu={setOpenMenu} />
      <ScrollHeader show={scrollHeader} />
      <StyledHeader bg_img='/images/header-bg2.jpg'>
        <Backdrop>
          <UpperHeader open={openMenu} setOpenMenu={setOpenMenu} />
          <BottomHeader bottom_header={props.bottom_header} />
        </Backdrop>
      </StyledHeader>
    </>
  );
}

Header.propTypes = {
  bottom_header: PT.bool,
};
