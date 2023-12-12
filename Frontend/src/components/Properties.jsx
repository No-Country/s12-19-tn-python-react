import React from 'react'
import data from "../../data.json"
import { v4 as uuidv4 } from "uuid";
import s from"../style/Properties.module.css"; 
import heart from "../assets/Heart1.png";
import star from "../assets/Star 1.png";

const Properties = () => {
  return (
    <div>
    {data.map((x)=>{

        return(
            <div className={s.elementsContainer} key={uuidv4()}>
                <div className={s.imgHeartContainer}>
                <img className={s.image} src={x.images} alt={x.name + " " + x.id} />
                <img className={s.heart} src={heart} alt={ "Heart " + x.id} />
                </div>
                <div className={s.locHeartContainer}>
            <p>{x.location}</p>
            <div className={s.rateStarContainer}>
              <p>{x.rating}</p>
              <img className={s.star} src={star} alt={"star" + x.id} />
            </div>
          </div>
          <p className={s.price}>{"US $"+ x.precio + "noche" }</p>
            </div>
        )

    })}
    </div>
  )
}

export default Properties