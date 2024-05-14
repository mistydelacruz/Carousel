/***************************************
* Created by: Misty Dela Cruz
* Created on: 4/15/2024
* Last Modified: 4/29/2024
* Updates:
* Fixed the carousel images to fit in the div
* Added placeholder divs for arrow icons
***************************************/

import React, { useState } from "react";
import './Carousel.css'
import { images } from "../data/carouselData";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Carousel() {
    const [currImg, setCurrImg] = useState(0);                       {/*useState to change between images*/}
    return (
        <>
            <div className="carousel">                               {/*Divider for the logo*/}
                <div className="carousel-inner" style={{backgroundImage: `url(${images[currImg].img})`}}>   {/*Divider for the inner carousel*/}
                    <div className="carousel-left">                  {/*Divider for the left arrow icon*/}
                    </div>
                    <div className="carousel-center">

                    </div>
                    <div className="carousel-right">                 {/*Divider for the right arrow icon*/}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carousel