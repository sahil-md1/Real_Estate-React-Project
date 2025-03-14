import React from "react";
import './headers.css'

const hearders = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings h-container">
        <img src="./logo.png" alt="logo" width={100} />

        <div className="flexCenter h-menu">
          <a href="">Resedencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="button" >
            <a href="">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default hearders;
