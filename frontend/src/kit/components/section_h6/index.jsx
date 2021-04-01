import React from 'react';
import PT from 'prop-types';
import {StyledH6} from './styles';

export default function SectionH6(props) {
  return <StyledH6 color={props.color}>{props.children}</StyledH6>;
}

SectionH6.propTypes = {
  color: PT.oneOf(['white', 'grey']),
};
