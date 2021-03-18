import React from 'react';
import PT from 'prop-types';
import UpperHeader from '../upper_header';
import { StyledHeader } from './styles';
export default function ScrollHeader(props = { show: true }) {
  return (
    <StyledHeader show={props.show}>
      <UpperHeader scrolled={true} open={props.open} setOpenMenu={props.setOpenMenu} />
    </StyledHeader>
  );
}

ScrollHeader.propTypes = {
  show: PT.bool,
};
