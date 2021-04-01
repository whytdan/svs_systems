import React from "react"
import style from "./style.module.scss"
import Section from "../../../components/section";
import SectionHeader from "../../../components/section_header";
import SectionH6 from "../../../components/section_h6";
import {Wrapper} from "../../services_page/intro/styles";
import girl from "./assests/page-4_img02.jpg"
import boy from "./assests/page-4_img03.jpg"

export default function LanguageTraining() {
  const servicesArr = [
    {
      id: 1,
      title: "Fobortis quis lobortis dignissim",
      src: girl,
      text: <p>Aenean auctor diam eget venenatis ultr icies. Ut consequat et augue sed lacinia. Quisque commodo nulla
        non risus sceleri sque, eu feugiat nisl lobortis.<br/><br/>Curabitur elit elit, egestas quis nulla non, luctus
        convallis purus. Integer eget tincidu nt nibh. Morbi laoreet laoreet</p>
    },
    {
      id: 2,
      title: "Reprehenderit quis lobortis dignissim",
      src: boy,
      text: <p>consequuntur dolor doloremque dolores dolorum eaque eius enim error facere <br/><br/>facere fugit
        inventore iure laudantium maxime modi, nobis officiis quaerat quasi qui, quidem repellendus reprehenderit sed
        velit veritatis vero.</p>
    },
  ]
  return (
    <Section bg_color='lightgrey'>
      <SectionHeader color='grey'>
        <span>Language</span> training
      </SectionHeader>
      <SectionH6 color='grey'>
        Morbi laoreet laoreet porta. Cras ac mauris est.Etiam gravida bibendum mattis. Morbi accumsan nulla ex, at
        maximus mau ris aliquam et. Donec auctor lorem leo, eu placerat risus elementum atoin sem dolor
      </SectionH6>
      <div className={style.table}>
        {servicesArr.map(s => (
          <div key={s.id} className={style.cell}>
            <img src={s.src} alt=""/>
            <div className={style.desc}>
              <h4>{s.title}</h4>
              {s.text}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
