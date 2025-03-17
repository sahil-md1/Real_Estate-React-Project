import React from "react";
import "./contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const contact = () => {
  return (
    <section className="c-wrapper">
      <div className=" paddings innerWidth flexCenter c-container ">
        {/* left side  */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact Us</span>
          <span className="secondaryText">
            We always ready to help by providing the best service for you. We
            beleive a good balance to live can make your life better.
          </span>

          <div className=" flexColStart contactModes">
            <div className="flexColStart row">
              <div className="flexColStart mode">
                <div className="flexStart">
                  <div className=" flexCenter icons">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart details">
                    <span>Call</span>
                    <span>032 762 554 65</span>
                  </div>
                  <div className="flexCenter button">Call Now</div>
                </div>
              </div>
            </div>
          </div>
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
