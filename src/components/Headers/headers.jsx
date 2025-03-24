import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import "./headers.css";
import OutsideClickHandler from "react-outside-click-handler";

const hearders = () => {
  const [menuOpen, setMenuOpned] = useState(false);
  const getMenuStyles = (menuOpen) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpen && "-100%" };
    }
  };
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpned(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpen)}>
            <a href="">Resedencies</a>
            <a href="">Our Value</a>
            <a href="">Contact Us</a>
            <a href="">Get Started</a>
            <button className="button">
              <a href="">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={() => setMenuOpned(!menuOpen)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default hearders;
