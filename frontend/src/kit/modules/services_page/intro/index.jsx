import React from 'react';
import Section from '../../../components/section';
import SectionHeader from '../../../components/section_header';
import SectionH6 from '../../../components/section_h6';
import style from "./style.module.scss"
import {Image, Wrapper} from './styles';

export default function Intro() {
  return (
    <Section bg_color='lightgrey'>
      <SectionHeader color='grey'>
        <span>Localization</span> services
      </SectionHeader>
      <SectionH6 color='grey'>
        Morbi laoreet laoreet porta. Cras ac mauris est. Etiam gravida bibendum mattis. Morbi accumsan nulla ex, at
        maximus mau ris aliquam et. Donec auctor lorem leo, eu placerat risus elementum at. Proin sem dolor sagittis
      </SectionH6>

      <Wrapper>
        <div className={style.cell}>
          <Image img="/images/services_intro-1.jpg"/>
          <h4>Fobortis quis lobortis dignissim</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam autem beatae, consequuntur
            dolor doloremque dolores dolorum eaque eius enim error facere fugit inventore iure laudantium maxime modi,
            nobis officiis quaerat quasi qui, quidem repellendus reprehenderit sed velit veritatis vero.</p>
        </div>
        
        <div className={style.cell}>
          <Image img="/images/services_intro-2.jpg"/>
          <h4>Proin dictum elementum velit</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium autem cupiditate dolorem eaque.
            Consectetur culpa cumque deserunt dolores earum explicabo ipsa, itaque labore laboriosam laudantium natus
            numquam omnis quaerat quibusdam quisquam quo recusandae reiciendis sed sunt unde veniam voluptatum.</p>
        </div>
        <div className={style.cell}>
          <Image img="/images/services_intro-3.jpg"/>
          <h4>Fusce euismod consequat ante</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores autem commodi consequatur debitis
            dignissimos ducimus eius enim eos et eum illum incidunt iure labore modi nemo, nesciunt nihil officiis
            perferendis, praesentium quas ratione rerum sapiente sit voluptates voluptatum? Nemo, suscipit.</p>
        </div>
      </Wrapper>
    </Section>
  );
}
