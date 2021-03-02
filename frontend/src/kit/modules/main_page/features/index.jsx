import React, { useContext, useEffect } from 'react';
import SectionHeader from '../../../components/section_header';
import Section from '../../../components/section';

import {
  PricingCards,
  CardWrapper,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardSecondaryText,
} from './styles';
import { mainDataContext } from '../../../../contexts/MainDataContext';

export default function Pricing() {

  const { eventsSectionData, fetchEventsSectionData } = useContext(mainDataContext);

  useEffect(() => {
    fetchEventsSectionData()
  }, [])

  return (
    <Section bg_img='/images/pricing-bg.jpg'>
      <SectionHeader color='white'>
        {/* <span>ОРГАНИЗАЦИЯ МЕРОПРИЯТИЙ</span> <br/> */}
        {eventsSectionData?.title} <br/>
      </SectionHeader>

      <CardSecondaryText>
      {/* Наша компания оказывает услуги по организации и полной логистической поддержке деловых мероприятий. Главными задачами являются создание и проведение бизнес-ивентов на профессиональном уровне, с использованием индивидуального подхода */}
      {eventsSectionData?.description}
      </CardSecondaryText>
      
      <PricingCards>
        {
          eventsSectionData?.events.map(event => (
            <CardWrapper>
            <Card>
              <CardHeader>
                <h2>{event.title}</h2>
              </CardHeader>
              <CardBody>
                <div dangerouslySetInnerHTML={{
                   __html: event.description
                }}>

                </div>
                {/* <ul>
                  <li>Подбор места для проведения мероприятия</li>
                  <li>{"Организация и проведение регистрации участников (Аккредитация)"}</li>
                  <li>Кейтеринг</li>
                  <li>Техническое сопровождение</li>
                  <li>Организация проживания участников мероприятия, гостиницы</li>
                  <li>Подготовка пакета участника, раздаточного материала, канцелярских принадлежностей, оценочных материалов и другой печатной продукции</li>
                  <li>{"Транспортное обслуживание, встречи и проводы в аэропорту (Трансфер)"}</li>
                  <li>Фото- и видеосъемка</li>
                  <li>Прямые трансляции</li>
                  <li>Развлекательная программа</li>
                  <li>Множество мелких организационных моментов</li>
                </ul> */}
              </CardBody>
              {/* <CardFooter>
                <span>29$</span>
              </CardFooter> */}
            </Card>
          </CardWrapper>
          ))
        }
      </PricingCards>
    </Section>
  );
}
