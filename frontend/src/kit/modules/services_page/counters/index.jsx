import React from "react"
import style from "./style.module.scss"
import {
  AiOutlineCalendar,
  BsFillStarFill, FaCalendar, FaRegCalendar,
  FiThumbsUp, GrFormCalendar,
  MdPerson
} from "react-icons/all";
import SectionHeader from "../../../components/section_header";
import SectionH6 from "../../../components/section_h6";

export default function Counters() {
  const countersArr = [
    {
      id: 1,
      title: "Clients",
      text: "450",
      icon: <MdPerson size="30px" color="#ffffff"/>
    },
    {
      id: 2,
      title: "Awards",
      text: "214",
      icon: <BsFillStarFill size="30px" color="#ffffff"/>
    },
    {
      id: 3,
      title: "Likes",
      text: "7685",
      icon: <FiThumbsUp size="30px" color="#ffffff"/>
    },
    {
      id: 4,
      title: "Days",
      text: "364",
      icon: <FaCalendar size="30px" color="#ffffff"/>
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
          countersArr.map(f => (
            <div key={f.id} className={style.cell}>
              {f.icon}
              <h4>{f.title}</h4>
              <p>{f.text}</p>
              {f.id !== 4 && <div style={{right: "0"}} className={style.border}/>}
            </div>
          ))
        }
      </div>
    </div>
  )
}