import React from "react";
import "./hero.css";
import { HiLocationMarker } from "react-icons/hi";

const hero = () => {
  return (
    <section className="hero-wrapper">
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
          <div className="hero-des flexColStart">
            <span>Find a variety of property that suits you very easilty</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
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
