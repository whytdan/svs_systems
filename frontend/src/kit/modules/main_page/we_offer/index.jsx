import React, { useContext, useEffect } from 'react';
import Section from '../../../components/section';
import SectionHeader from '../../../components/section_header';
import SectionH6 from '../../../components/section_h6';
import {
  ServicesBlock,
  ServiceCard,
  CardIcon,
  CardTitle,
  CardText,
} from './styles';

import OffersAdminModal from './OffersAdminModal';
import { mainDataContext } from '../../../../contexts/MainDataContext';

export default function WeOffer(props) {

  const { fetchOffersSectionData, offersSectionData } = useContext(mainDataContext);

  useEffect(() => {
    fetchOffersSectionData()
  }, [])

  return (
    <Section bg_color='lightgrey'>

      <OffersAdminModal/>

      <SectionHeader color='grey'>
        {/* <span>Что</span> мы можем предложить */}
        {offersSectionData?.title}
      </SectionHeader>

      <SectionH6 color='grey'>
      {offersSectionData?.description}
      </SectionH6>
      <ServicesBlock>
        {
          offersSectionData?.offers.map(offer => (
            <ServiceCard>
              <CardIcon>
                <img src={offer.icon} alt='eye' />
              </CardIcon>
              <CardTitle>
                {/* Перевод <span>Документов</span> */}
                {offer.title}
              </CardTitle>
              <CardText>
                {offer.description}
              </CardText>
            </ServiceCard>
          ))
        }
      </ServicesBlock>
    </Section>
  );
}
