import React from "react";
// import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import './carousel.scss';
import home1 from '../../images/homepage/home1.jpg';
import home2 from '../../images/homepage/home2.jpg';
import home3 from '../../images/homepage/home3.jpg';
import home4 from '../../images/homepage/home4.jpg';
import home5 from '../../images/homepage/home5.jpg';
import home6 from '../../images/homepage/home6.jpg';

const carousel = document.querySelectorAll(".carousel");

carousel.classList.toggle("active");

const fadeImages = [
  {image: home1},
  {image: home2},
  {image: home3},
  {image: home4},
  {image: home5},
  {image: home6}
];

function Carousel() {
  return (
    <div>
      {fadeImages.map((image) => (
          <img alt="" src={image} className="carousel"/>
      ))}
    </div>
//     <>
//     <div>
//       <img alt="" className="carousel" src={home1}/>
//     </div>
//     <div>
//     <img alt="" className="carousel" src={home2}/>
//   </div>
//   <div>
//   <img alt="" className="carousel" src={home3}/>
// </div>
// <div>
//       <img alt="" className="carousel" src={home4}/>
//     </div>
//     <div>
//     <img alt="" className="carousel" src={home5}/>
//   </div>
//   <div>
//   <img alt="" className="carousel" src={home6}/>
// </div>
// </>

    // <div className="slide-container">
    //   <Fade>
    //     <div className="each-fade">
		// 	    <img src={fadeImages[0]} alt=""/>
    //     </div>
        /* <div className="each-fade">
        <img src={home2} alt=""/>
        </div>
        <div className="each-fade">
        <img src={home3} alt=""/>
        </div>
		 <div className="each-fade">
     <img src={home4} alt=""/>
         </div>
		 <div className="each-fade">
     <img src={home5} alt=""/>
         </div>
		 <div className="each-fade">
     <img src={home6} alt=""/>
         </div> */
       /* </Fade>
     </div> */
  );
}

export default Carousel;