import React from 'react';
import Section from '../../../components/section';
import SectionHeader from '../../../components/section_header';
import SectionH6 from '../../../components/section_h6';
import {
  FeaturesCards,
  FeatureCard,
  FeatureNumber,
  FeatureInfo,
} from './styles';

export default function Features() {
  return (
    <Section bg_img='/images/features_bg.jpg'>
      <SectionHeader color='white'>
        <span>Our</span> features
      </SectionHeader>
      <SectionH6>
        Morbi non justo tortor. Donec odio mi, ultricies non volutpat non,
        tempor at justo. Phasellus dui nunc, tincidunt at massa ut porttitor
        rhoncus tellus. Donec gravida id augue a efficitur. Ut gravida ornare
      </SectionH6>
      <FeaturesCards>
        <FeatureCard>
          <FeatureNumber>
            <span>1</span>
          </FeatureNumber>
          <FeatureInfo>
            <h3>Vestibulum ante faucib</h3>
            <p>
              Donec sed lorem arcu. Suspendisse porttitor in nisl ac tincidunt.
              Aenean ut libero ante. Praesent interdum
            </p>
          </FeatureInfo>
        </FeatureCard>
        <FeatureCard>
          <FeatureNumber>
            <span>2</span>
          </FeatureNumber>
          <FeatureInfo>
            <h3>Vestibulum ante faucib</h3>
            <p>
              Donec sed lorem arcu. Suspendisse porttitor in nisl ac tincidunt.
              Aenean ut libero ante. Praesent interdum
            </p>
          </FeatureInfo>
        </FeatureCard>
        <FeatureCard>
          <FeatureNumber>
            <span>3</span>
          </FeatureNumber>
          <FeatureInfo>
            <h3>Vestibulum ante faucib</h3>
            <p>
              Donec sed lorem arcu. Suspendisse porttitor in nisl ac tincidunt.
              Aenean ut libero ante. Praesent interdum
            </p>
          </FeatureInfo>
        </FeatureCard>
      </FeaturesCards>
    </Section>
  );
}
