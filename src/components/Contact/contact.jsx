import React from "react";
import "./contact.css";

const contact = () => {
  return (
    <section className="c-wrapper">
      <div className=" paddings innerWidth flexCenter c-container fl">
        {/* left side  */}

        <div className="c-left">left</div>

        {/* right side  */}

        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt=""></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contact;
