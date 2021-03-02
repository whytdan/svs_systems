import React from 'react';
import Section from '../../../components/section';
import {
  Wrapper,
  SectionHeader,
  SectionText,
  LanguagesLists,
  List,
} from './styles';

// TODO: How to render language lists???

export default function Languages({service}) {
  return (
    <Section bg_img='/images/languages-bg.jpg'>
      <Wrapper>
        <div>
          <SectionHeader>
            <span>{service}</span> 
          </SectionHeader>
          <SectionText>
            Quisque molestie tincidunt urna nec bibend um. Fusce eleifend
            sodales orci, at malesuada mauris fri ngilla imperdiet. Maecenas
            dolor elit ul trices ligula ut, fringilla facilisis diam. Nullam
            laoreet nulla sem, et malesua.
          </SectionText>
        </div>
        <LanguagesLists>
          <List>
            <li>
              <img src='/icons/arrow-right.png' alt='arrow' />
              <span>English</span>
            </li>
            <li>
              <img src='/icons/arrow-right.png' alt='arrow' />
              <span>English</span>
            </li>
            <li>
              <img src='/icons/arrow-right.png' alt='arrow' />
              <span>English</span>
            </li>
            <li>
              <img src='/icons/arrow-right.png' alt='arrow' />
              <span>English</span>
            </li>
            <li>
              <img src='/icons/arrow-right.png' alt='arrow' />
              <span>English</span>
            </li>
            <li>
              <img src='/icons/arrow-right.png' alt='arrow' />
              <span>English</span>
            </li>
            <li>
              <img src='/icons/arrow-right.png' alt='arrow' />
              <span>English</span>
            </li>
          </List>
          <List>
            <li>
              <img src='/icons/arrow-right.png' alt='arrow' />
              <span>English</span>
            </li>
            <li>
              <img src='/icons/arrow-right.png' alt='arrow' />
              <span>English</span>
            </li>
            <li>
              <img src='/icons/arrow-right.png' alt='arrow' />
              <span>English</span>
            </li>
            <li>
              <img src='/icons/arrow-right.png' alt='arrow' />
              <span>English</span>
            </li>
            <li>
              <img src='/icons/arrow-right.png' alt='arrow' />
              <span>English</span>
            </li>
            <li>
              <img src='/icons/arrow-right.png' alt='arrow' />
              <span>English</span>
            </li>
            <li>
              <img src='/icons/arrow-right.png' alt='arrow' />
              <span>English</span>
            </li>
          </List>
          <List>
            <li>
              <img src='/icons/arrow-right.png' alt='arrow' />
              <span>English</span>
            </li>
            <li>
              <img src='/icons/arrow-right.png' alt='arrow' />
              <span>English</span>
            </li>
            <li>
              <img src='/icons/arrow-right.png' alt='arrow' />
              <span>English</span>
            </li>
            <li>
              <img src='/icons/arrow-right.png' alt='arrow' />
              <span>English</span>
            </li>
            <li>
              <img src='/icons/arrow-right.png' alt='arrow' />
              <span>English</span>
            </li>
            <li>
              <img src='/icons/arrow-right.png' alt='arrow' />
              <span>English</span>
            </li>
            <li>
              <img src='/icons/arrow-right.png' alt='arrow' />
              <span>English</span>
            </li>
          </List>
          <List>
            <li>
              <img src='/icons/arrow-right.png' alt='arrow' />
              <span>English</span>
            </li>
            <li>
              <img src='/icons/arrow-right.png' alt='arrow' />
              <span>English</span>
            </li>
            <li>
              <img src='/icons/arrow-right.png' alt='arrow' />
              <span>English</span>
            </li>
            <li>
              <img src='/icons/arrow-right.png' alt='arrow' />
              <span>English</span>
            </li>
            <li>
              <img src='/icons/arrow-right.png' alt='arrow' />
              <span>English</span>
            </li>
            <li>
              <img src='/icons/arrow-right.png' alt='arrow' />
              <span>English</span>
            </li>
            <li>
              <img src='/icons/arrow-right.png' alt='arrow' />
              <span>English</span>
            </li>
          </List>
        </LanguagesLists>
      </Wrapper>
    </Section>
  );
}
