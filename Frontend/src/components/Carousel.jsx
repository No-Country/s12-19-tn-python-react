import React from "react";
import data from "../../data.json";
import "../style/Carousel.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { v4 as uuidv4 } from "uuid";
import star from "../assets/Star 1.png";
import { Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Carousel = () => {
  return (
    <Swiper className="container"
    spaceBetween={19.6}
    slidesPerView={4}
    navigation={true}
    modules={[Navigation]}
    >
      
      {data.map((x) => (
        <SwiperSlide className="elementsContainer"  key={uuidv4()}>
          <div className="imgPriceContainer">
            <img className="image" src={x.images} alt={x.name + " " + x.id} />
            <p className="price">US${x.precio}</p>
          </div>
          <div className="locStarContainer">
            <p>{x.location}</p>
            <div className="rateStarContainer">
              <p>{x.rating}</p>
              <img className="start" src={star} alt={"start" + x.id} />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
