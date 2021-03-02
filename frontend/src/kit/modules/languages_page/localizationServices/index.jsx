import React from './style.module.scss'
import style from './style.module.scss'
import SectionHeader from "../../../components/section_header";
import SectionH6 from "../../../components/section_h6";
import {Wrapper} from "../../services_page/intro/styles";
import Section from "../../../components/section";

export default function LocalizationServices() {

  const servicesArr = [
    {
      id: 1,
      title: "Fobortis quis lobortis dignissim",
      text: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam autem beatae, consequuntur
        dolor doloremque dolores dolorum eaque eius enim error facere fugit inventore iure laudantium maxime modi, nobis
        officiis quaerat quasi qui, quidem repellendus reprehenderit sed velit veritatis vero.Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Accusantium aliquam autem beatae, <br/><br/> consequuntur dolor doloremque
        dolores dolorum eaque eius enim error facere fugit inventore iure laudantium maxime modi, nobis officiis quaerat
        quasi qui, quidem repellendus reprehenderit sed velit veritatis vero.</p>
    },
    {
      id: 2,
      title: "Reprehenderit quis lobortis dignissim",
      text: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam autem beatae, consequuntur
        dolor doloremque dolores dolorum eaque eius enim error facere <br/><br/> fugit inventore iure laudantium maxime
        modi, nobis officiis quaerat quasi qui, quidem repellendus reprehenderit sed velit veritatis vero.Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Accusantium aliquam autem beatae, consequuntur dolor doloremque
        dolores dolorum eaque eius enim error facere fugit inventore iure laudantium maxime modi, nobis officiis quaerat
        quasi qui, quidem repellendus reprehenderit sed velit veritatis vero.</p>
    },
    {
      id: 3,
      title: "Prehenderit quis lobortis dignissim",
      text: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam autem beatae, consequuntur
        dolor doloremque dolores dolorum eaque eius enim error facere fugit inventore iure laudantium maxime modi, <br/><br/> nobis
        officiis quaerat quasi qui, quidem repellendus reprehenderit sed velit veritatis vero.Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Accusantium aliquam autem beatae consequuntur dolor doloremque dolores
        dolorum eaque eius enim error facere fugit inventore iure laudantium maxime modi, nobis officiis quaerat quasi
        qui, quidem repellendus reprehenderit sed velit veritatis vero.</p>
    },
  ]

  return (
    <Section bg_color='lightgrey'>
      <SectionHeader color='grey'>
        <span>Services</span> overview
      </SectionHeader>
      <SectionH6 color='grey'>
        Aliquam eros. Nam ultricies, lectus ac vehicula aliquet, tortor risus bibendum nulla, id vestibulum diam diam
        nec urna. Donec purus ante, facilisis ac turpis in, scelerisque posuere odio
      </SectionH6>
      <Wrapper>
        {servicesArr.map(s => (
          <div key={s.id} className={style.cell}>
            <h4>{s.title}</h4>
            {s.text}
          </div>
        ))}
      </Wrapper>
    </Section>
  )
}