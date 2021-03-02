import React from "react"
import style from "./style.module.scss"
import {AiOutlineRightCircle} from "react-icons/all";

export default function ServicesList() {
  const servicesArr = [
    {
      id: 1,
      texts: [
        "Pestibulum molestieenean",
        "Hendreritivamus molestieenean",
        "Etiam molestieenean",
        "Nulla facilisii primis molestieenean",
        "Pestibulum molestieenean",
        "Vestibulum ante molestieenean",
      ],
    },
    {
      id: 2,
      texts: [
        "Pestibulum molestieenean",
        "Hendreritivamus molestieenean",
        "Etiam molestieenean",
        "Nulla facilisii primis molestieenean",
        "Pestibulum molestieenean",
        "Vestibulum ante molestieenean",
      ],
    },
    {
      id: 3,
      texts: [
        "Pestibulum molestieenean",
        "Hendreritivamus molestieenean",
        "Etiam molestieenean",
        "Nulla facilisii primis molestieenean",
        "Pestibulum molestieenean",
        "Vestibulum ante molestieenean",
      ],
    },
    {
      id: 4,
      texts: [
        "Pestibulum molestieenean",
        "Hendreritivamus molestieenean",
        "Etiam molestieenean",
        "Nulla facilisii primis molestieenean",
        "Pestibulum molestieenean",
        "Vestibulum ante molestieenean",
      ],
    },
  ]

  return (
    <div className={style.mainCont}>
      <div className={style.title}>
        <h2><b>Services</b> list</h2>
        <p>Aenean auctor diam eget venenatis ultricies. Ut consequat et augue sed lacinia. Quisque commodo nulla non
          risus scelerisque eu feugiat nisl lobortis. Curabitur elit elit, egestas quis nulla non, luctus convallis
          purus. Integer eget tinci</p>
      </div>
      <div className={style.table}>
        {servicesArr.map(s => (
          <ul key={s.id} className={style.cell}>
            {s.texts.map((t, i) => <li key={i} className={style.row}><AiOutlineRightCircle size="20px"
                                                                                           color={"#15dde4"}/><p>{t}</p>
            </li>)}
          </ul>
        ))}
      </div>
    </div>
  )
}