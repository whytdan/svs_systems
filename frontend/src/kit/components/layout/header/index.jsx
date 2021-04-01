import PT from 'prop-types';
import React, { useState, useEffect } from 'react';
import BottomHeader from './bottom_header';
import ScrollHeader from './scroll_header';
import UpperHeader from './upper_header';
import BurgerMenu from './burger_menu';
import { Backdrop, StyledHeader } from './styles';

export default function Header(props) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <ScrollHeader open={openMenu} setOpenMenu={setOpenMenu} />
      <StyledHeader bg_img='/images/translate-bg2.jpeg'>
        <Backdrop>
          <BottomHeader bottom_header={props.bottom_header} />
        </Backdrop>
      </StyledHeader>
    </>
  );
}

Header.propTypes = {
  bottom_header: PT.bool,
};
