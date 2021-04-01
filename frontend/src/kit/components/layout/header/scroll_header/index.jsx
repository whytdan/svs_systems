import React from 'react';
import PT from 'prop-types';
import UpperHeader from '../upper_header';
import { StyledHeader } from './styles';
import BurgerMenu from '../burger_menu';
export default function ScrollHeader(props) {
  return (
    <StyledHeader>
      <BurgerMenu open={props.open} setOpenMenu={props.setOpenMenu} />
      <UpperHeader scrolled={true} open={props.open} setOpenMenu={props.setOpenMenu} />
    </StyledHeader>
  );
}

ScrollHeader.propTypes = {
  show: PT.bool,
};
