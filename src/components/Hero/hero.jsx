import React from "react";
import "./hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

const hero = () => {
  return (
    <section className="hero-wrapper ">
      <div className="padding innerWidth flexCenter hero-container">
        <div className="hero-left flexColStart">
          <div className="hero-title">
            <div className="orange-circel" />
            <h1>
              Discover <br />
              more suitable <br />
              property
            </h1>
          </div>
          <div className="hero-des flexColStart secondaryText">
            <span>Find a variety of property that suits you very easilty</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Coustmers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={40} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winnings</span>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;
