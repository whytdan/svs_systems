import React, { useContext, useEffect } from 'react';
import Section from '../../../components/section';
import SectionHeader from '../../../components/section_header';
import SectionH6 from '../../../components/section_h6';
import { WhyCards, WhyCard } from './styles';
import { mainDataContext } from '../../../../contexts/MainDataContext';

export default function WhyChooseUs() {

  const {fetchAboutUs, aboutUs} = useContext(mainDataContext);

  useEffect(() => {
    fetchAboutUs()
  }, [])

  return (
    <Section bg_color='white'>
      <SectionHeader color='grey'>
        {aboutUs?.title}
      </SectionHeader>
      <SectionH6 color='grey'>
        {aboutUs?.description}
      {/* Компания «SVS Systems" была основана в ___году в г.Бишкек. С тех  пор мы оказываем услуги по организации мероприятий с технической поддержкой и услугами перевода.. Среди наших клиентов есть люди и организации из любой государственной или коммерческой сферы. */}
      </SectionH6>
      {/* <WhyCards>
        <WhyCard>
          <h3>Aenean nec eros luctus</h3>
          <p>
            Vestibulum id neque non velit aliquet fermentum. Nunc rhoncus mattis
            malesuada. Etiam laoreet id erat in ultrices. Cum sociis natoque
            penatibus et
          </p>
        </WhyCard>
        <WhyCard>
          <h3>Aenean nec eros luctus</h3>
          <p>
            Vestibulum id neque non velit aliquet fermentum. Nunc rhoncus mattis
            malesuada. Etiam laoreet id erat in ultrices. Cum sociis natoque
            penatibus et
          </p>
        </WhyCard>
        <WhyCard>
          <h3>Aenean nec eros luctus</h3>
          <p>
            Vestibulum id neque non velit aliquet fermentum. Nunc rhoncus mattis
            malesuada. Etiam laoreet id erat in ultrices. Cum sociis natoque
            penatibus et
          </p>
        </WhyCard>
      </WhyCards> */}
    </Section>
  );
}
