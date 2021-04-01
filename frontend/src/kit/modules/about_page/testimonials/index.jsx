import React from 'react';
import Section from '../../../components/section';
import SectionHeader from '../../../components/section_header';
import SectionH6 from '../../../components/section_h6';
import {
  TestimonialCards,
  TestimonialCard,
  TestimonialAvatar,
  TestimonialInfo,
  TestimonialBio,
} from './styles';

export default function Testimonials() {
  return (
    <Section bg_color='lightgrey' border_bottom={true}>
      <SectionHeader color='grey'>
        <span>Testimonials</span>
      </SectionHeader>
      <SectionH6 color='grey'>
        Phasellus lobortis leo eget diam venenatis porta. Proin maximus, mauris
        ut suscipit mollis nibh nisl hendrerit urna, a scelerisque est velit ut
        nulla. Etiam pellentesque nibh in facilisis aliquet.
      </SectionH6>
      <TestimonialCards>
        <TestimonialCard>
          <TestimonialAvatar img='/images/testimonial_avatar.jpg' />
          <TestimonialInfo>
            <p>
              Vestibulum eget nunc eget leo fermentum imp erdiet. Quisque sit
              amet ligula porta, tempus ante nec, varius ni si. Nunc mollis
              vulputate tortor quis pharetra. Nam viverra nulla dolor, sit amet
              aliquet lectus
            </p>
            <TestimonialBio>
              <h4>Camala Haddon,</h4>
              <span>client</span>
            </TestimonialBio>
          </TestimonialInfo>
        </TestimonialCard>
        <TestimonialCard>
          <TestimonialAvatar img='/images/testimonial_avatar.jpg' />
          <TestimonialInfo>
            <p>
              Vestibulum eget nunc eget leo fermentum imp erdiet. Quisque sit
              amet ligula porta, tempus ante nec, varius ni si. Nunc mollis
              vulputate tortor quis pharetra. Nam viverra nulla dolor, sit amet
              aliquet lectus
            </p>
            <TestimonialBio>
              <h4>Camala Haddon,</h4>
              <span>client</span>
            </TestimonialBio>
          </TestimonialInfo>
        </TestimonialCard>
        <TestimonialCard>
          <TestimonialAvatar img='/images/testimonial_avatar.jpg' />
          <TestimonialInfo>
            <p>
              Vestibulum eget nunc eget leo fermentum imp erdiet. Quisque sit
              amet ligula porta, tempus ante nec, varius ni si. Nunc mollis
              vulputate tortor quis pharetra. Nam viverra nulla dolor, sit amet
              aliquet lectus
            </p>
            <TestimonialBio>
              <h4>Camala Haddon,</h4>
              <span>client</span>
            </TestimonialBio>
          </TestimonialInfo>
        </TestimonialCard>
        <TestimonialCard>
          <TestimonialAvatar img='/images/testimonial_avatar.jpg' />
          <TestimonialInfo>
            <p>
              Vestibulum eget nunc eget leo fermentum imp erdiet. Quisque sit
              amet ligula porta, tempus ante nec, varius ni si. Nunc mollis
              vulputate tortor quis pharetra. Nam viverra nulla dolor, sit amet
              aliquet lectus
            </p>
            <TestimonialBio>
              <h4>Camala Haddon,</h4>
              <span>client</span>
            </TestimonialBio>
          </TestimonialInfo>
        </TestimonialCard>
      </TestimonialCards>
    </Section>
  );
}
