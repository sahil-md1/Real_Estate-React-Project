import React from "react";
import "./contact.css";

const contact = () => {
  return (
    <section className="c-wrapper">
      <div className=" paddings innerWidth flexCenter c-container fl">
        {/* left side  */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact Us</span>
          <span className="secondaryText">
            We always ready to help by providing the best service for you. We
            beleive a good balance to live can make your life better.
          </span>
        </div>

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
