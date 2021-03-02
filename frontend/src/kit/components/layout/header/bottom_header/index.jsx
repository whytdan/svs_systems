import React, { useContext, useEffect } from 'react';
import PT from 'prop-types';
import { StyledBottomHeader } from './styles';
import { mainDataContext } from '../../../../../contexts/MainDataContext';


export default function BottomHeader(props) {

  const { fetchHeroData, heroData } = useContext(mainDataContext);
  
  useEffect(() => {
    fetchHeroData();
  }, [])

  return (
    <StyledBottomHeader bottom_header={props.bottom_header}>
      <h2 style={{maxWidth: 700, margin: '0 auto'}}>
        {
          heroData?.title
        }
      </h2>
      <p style={{width: '90%', maxWidth: '700px', margin: '40px auto 0'}}>
      {
        heroData?.description
      }
      </p>
    </StyledBottomHeader>
  );
}

BottomHeader.propTypes = {
  bottom_header: PT.bool,
};
