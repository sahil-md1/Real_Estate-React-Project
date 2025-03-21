import React from "react";
import "./getStarted.css";

const getStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="innerWidth paddings g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Homyz</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from
            <br />
            Find Your own residence soon
          </span>
          <button className="button">
            <a href="mailto:www.booking.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default getStarted;
