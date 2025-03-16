import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./value.css";
import data from "../../utils/accordion";

const value = () => {
  return (
    <section className="v-wrapper">
      <div className="innerWidth  paddings flexCenter v-container ">
        {/* left Side  */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png"></img>
          </div>
        </div>

        {/* right side  */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Values</span>
          <span className="primaryText">Value We Give to you</span>
          <span className="secondaryText">
            We always ready to help by providing the best service for you.
            <br />
            We belive a good balance to live can make your life better
          </span>

          <Accordion
            className="accordian"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((items, idx) => {
              const [className, setClassName] = useState(false);
              console.log(className, "sahil");

              return (
                <AccordionItem
                  className={`accordianItem ${className}`}
                  key={idx}
                  uuid={idx}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordianButton">
                      <AccordionItemState>
                        {({ expended }) =>
                          expended
                            ? setClassName("expended")
                            : setClassName("collaps")
                        }
                      </AccordionItemState>
                      <div className="flexCenter icons">{items.icon}</div>
                      <span className="primaryText">{items.heading}</span>
                      <dic className="flexCenter icons">
                        <MdOutlineArrowDropDown
                          size={20}
                        ></MdOutlineArrowDropDown>
                      </dic>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondarytext">{items.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default value;
