import React from "react"
import style from "./style.module.scss"

export default function Additional() {
  const additionalServices = [
    {
      id: 1,
      title: "Fusce consectetur aliquam erat",
      text: "Nullam laoreet nulla sem, et malesuada metus ultricies ullamcorper. Phasellus lobortis leo eget diam venenatis porta. Proin maximus, mauris ut suscipit mollis nibh nisl hendrerit urna, a scelerisque est velit ut nulla. Etiam pellentesque nibh in facilisis aliquet.",
      num: "0.1"
    },
    {
      id: 2,
      title: "Fusce consectetur aliquam erat",
      text: "Nullam laoreet nulla sem, et malesuada metus ultricies ullamcorper. Phasellus lobortis leo eget diam venenatis porta. Proin maximus, mauris ut suscipit mollis nibh nisl hendrerit urna, a scelerisque est velit ut nulla. Etiam pellentesque nibh in facilisis aliquet.",
      num: "0.2"
    },
    {
      id: 3,
      title: "Fusce consectetur aliquam erat",
      text: "Nullam laoreet nulla sem, et malesuada metus ultricies ullamcorper. Phasellus lobortis leo eget diam venenatis porta. Proin maximus, mauris ut suscipit mollis nibh nisl hendrerit urna, a scelerisque est velit ut nulla. Etiam pellentesque nibh in facilisis aliquet.",
      num: "0.3"
    },
    {
      id: 4,
      title: "Fusce consectetur aliquam erat",
      text: "Nullam laoreet nulla sem, et malesuada metus ultricies ullamcorper. Phasellus lobortis leo eget diam venenatis porta. Proin maximus, mauris ut suscipit mollis nibh nisl hendrerit urna, a scelerisque est velit ut nulla. Etiam pellentesque nibh in facilisis aliquet.",
      num: "0.4"
    },
  ]

  return (
    <div className={style.mainCont}>
      <div className={style.title}>
        <h2><b>Additional</b> services</h2>
        <p>Nullam laoreet nulla sem, et malesuada metus ultricies ullamcorper. Phasellus lobortis leo eget diam
          venenatis porta. Proin maximus, mauris ut suscipit mollis nibh nisl hendrerit urna, a scelerisque est velit ut
          nulla. Etiam pellentesque nibh in facilisis aliquet.</p>
      </div>
      <div className={style.table}>
        {additionalServices.map(a => (
          <div key={a.id} className={style.cell}>
            <span className={style.number}>{a.num}</span>
            <div className={style.desc}>
              <h4>{a.title}</h4>
              <p>{a.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}