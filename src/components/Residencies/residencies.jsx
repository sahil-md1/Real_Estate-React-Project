import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./residencies.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";

const residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart h-head">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residences</span>
        </div>
        <Swiper {...sliderSettings}  >
          <SliderButton />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className=" flexColStart r-card ">
                <img src={card.image} alt="home"></img>
                <span className=" secondaryText r-price">
                  <span style={{ color: "black" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <snap className="primaryText">{card.name}</snap>
                <snap className="secondaryText">{card.detail}</snap>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const SliderButton = () => {
  const swiper = useSwiper()
  return (
    <div className="flexCenter r-buttons ">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  )
}
export default residencies;

