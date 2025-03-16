import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import './value.css'

const value = () => {
    console.log();
    
    return (

        <section className='v-wrapper'>
            <div className="innerWidth  paddings flexCenter v-container ">
                {/* left Side  */}

                <div className='v-left'>
                    <div className='image-container'>
                        <img src='./value.png'></img>
                    </div>
                </div>

                {/* right side  */}


                div*2
            </div>


        </section>
    )
};

export default value