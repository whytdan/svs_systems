import React from "react"
import style from "./style.module.scss"
import SectionHeader from "../../../components/section_header";
import SectionH6 from "../../../components/section_h6";
import {
  AiOutlineCloud, FiThumbsUp, GoMail, IoDocumentOutline,
} from "react-icons/all";

export default function Features() {

  const featuresArr = [
    {
      id: 1,
      title: "Proin dictum",
      text: "Etiam pellentes que nibh in faci lisis aliquet. Nam ipsum risus, lobortis sed sem vitae, posuere commodo sem. Aliquam in pulvinar tellus. Cras mollis eleifend nec ex",
      icon: <AiOutlineCloud size="48px" color="#15dde4"/>
    },
    {
      id: 2,
      title: "Elementum velit",
      text: "Etiam pellentes que nibh in faci lisis aliquet. Nam ipsum risus, lobortis sed sem vitae, posuere commodo sem. Aliquam in pulvinar tellus. Cras mollis eleifend nec ex",
      icon: <FiThumbsUp size="48px" color="#15dde4"/>
    },
    {
      id: 3,
      title: "Consequat ante",
      text: "Etiam pellentes que nibh in faci lisis aliquet. Nam ipsum risus, lobortis sed sem vitae, posuere commodo sem. Aliquam in pulvinar tellus. Cras mollis eleifend nec ex",
      icon: <GoMail size="48px" color="#15dde4"/>
    },
    {
      id: 4,
      title: "Lorem ipsum dolo",
      text: "Etiam pellentes que nibh in faci lisis aliquet. Nam ipsum risus, lobortis sed sem vitae, posuere commodo sem. Aliquam in pulvinar tellus. Cras mollis eleifend nec ex",
      icon: <IoDocumentOutline size="48px" color="#15dde4"/>
    },
  ]

  return (
    <div className={style.mainCont}>
      <div className={style.title}>
        <SectionHeader>
          <span>Featured</span> services
        </SectionHeader>
        <SectionH6>
          Nullam laoreet nulla sem, et malesuada metus ultricies ullamcorper. Phasellus lobortis leo eget diam venenatis
          porta. Proin maximus, mauris ut suscipit mollis nibh nisl hendrerit urna, a scelerisque est velit ut nulla.
          Etiam pellentesque nibh in facilisis aliquet.
        </SectionH6>
      </div>
      <div className={style.table}>
        {
          featuresArr.map(f => (
            <div key={f.id} className={style.cell}>
              {f.icon}
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}