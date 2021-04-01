import React from 'react';
import PT from 'prop-types';
import {StyledSectionHeader} from './styles';

export default function SectionHeader(props) {
  return (
    <StyledSectionHeader color={props.color}>
      {props.children}
    </StyledSectionHeader>
  );
}

SectionHeader.propTypes = {
  color: PT.oneOf(['white', 'grey']),
};
