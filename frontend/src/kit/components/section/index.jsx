import React from 'react';
import { StyledSection, Backdrop } from './styles';
import PT from 'prop-types';

export default function Section(props) {
  return (
    <StyledSection
      bg_color={props.bg_color}
      bg_img={props.bg_img}
      border_bottom={props.border_bottom}
    >
      <Backdrop bg_img={props.bg_img}>{props.children}</Backdrop>
    </StyledSection>
  );
}

Section.propTypes = {
  bg_color: PT.oneOf(['lightgrey', 'darkgrey', 'white']),
  bg_img: PT.string,
  border_bottom: PT.bool,
};
