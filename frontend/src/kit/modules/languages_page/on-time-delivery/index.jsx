import React from "react"
import style from "./style.module.scss"
import ava from "./assets/ava.jpg"

export default function OnTimeDelivery() {

  return (
    <div className={style.mainCont}>
      <div className={style.title}>
        <h2><b>On-time</b> delivery</h2>
        <h6>Phasellus lobortis leo eget diam venenatis porta. Proin maximus, mauris ut suscipit mollis nibh nisl
          hendrerit urna, a scelerisque est velit ut nulla. Etiam pellentesque nibh in facilisis aliquet.</h6>
      </div>
      <div className={style.content}>
        <div className={style.desc}>
          <h4>Hendreri tivamus eget nibh vel metustiam cursus leo psumulla facilisii</h4>
          <p>
            Phasellus lobortis leo eget diam venenatis porta. Proin maximus, mauris ut suscipit mollis, nibh nisl
            hendrerit urna, a sce lerisque est velit ut nulla. Etiam pellentes que nibh in facilisis. Cras ac mauris
            est. Etiam gra erwvida bibendum mattis. Morbi accumsan nulla ex, at maximus mauris aliquam et. Donec auctor
            lorem leo, eu placerat risus elementum at. Proin sem dolor, sagittis id scelerisque luctus, sodales vitae
            magna. Etiam viverra <br/> <br/>
            Nam ipsum risus, lobortis sed sem vitae, posuere commodo sem. Aliquam in pulvinar tellus. Cras mollis
            eleifend porttitor. Quisque nec ex luctus, volutpat orci sit amet, egestas neque. Integer sagittis auctor
            congue. Sed facilisis viverra nisl. Maecenas et venenatis dolor, quis rutrum tellus. Proin blandit lacinia
            massa.
          </p>
          <button>READ MORE</button>
        </div>
        <img src={ava} alt=""/>
      </div>
    </div>
  )
}
