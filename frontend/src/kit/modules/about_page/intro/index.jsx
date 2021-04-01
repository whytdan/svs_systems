import React from 'react';
import Section from '../../../components/section';
import SectionHeader from '../../../components/section_header';
import SectionH6 from '../../../components/section_h6';
import { Wrapper, Image, Description } from './styles';

export default function Intro() {
  return (
    <Section bg_color='lightgrey'>
      <SectionHeader color='grey'>
        <span>A few words</span> about us
      </SectionHeader >
      <SectionH6 color='grey'>
        Fusce eleifend sodales orci, at malesuada mauris fringilla imperdiet.
        Maecenas dolor elit, ultrices eget ligula ut, fringilla facilisis diam.
        Nullam laoreet nulla sem, et malesuada metus ultricies ullamcorper.
      </SectionH6>
      <Wrapper>
        <Image img='/images/about_us.jpg' />
        <Description>
          <h4>
            Praesent justo dolor lobortis quis lobortis dignissim pulvinar ac
            lorem
          </h4>
          <p>
            Phasellus lobortis leo eget diam venenatis porta. Proin maximus,
            mauris ut suscipit mollis, nibh nisl hendrerit urna, a scelerisque
            est velit ut nulla. Etiam pellentesque nibh in facilisis aliquet.Nam
            ipsum risus, lobortis sed sem vitae, posuere commodo sem. Aliquam in
            pulvinar tellus. Cras mollis eleifend porttitor. Quisque nec ex
            luctus, volutpat orci sit amet, egestas neque. Integer sagittis
            auctor congue.
            <br />
            Sed facilisis viverra nisl. Maecenas et venenatis dolor, quis rutrum
            tellus. Proin blandit lacinia massa. Phasellus viverra tincidunt
            sapien eget lacinia. Suspendisse egestas augue justo, vel tincidunt
            dui dignissim porttitor. Sed leo sem, ornare non tortor commodo,
            tristique suscipit diam. Aenean eget enim tortor. Fusce dapibus sem
            turpis, at rhoncus velit ultrices at. Proin vel lectus vitae lectus
            lobortis molestie.
          </p>
        </Description>
      </Wrapper>
    </Section>
  );
}
