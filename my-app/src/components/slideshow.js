import React from 'react';
import { Slide } from 'react-slideshow-image';
import image1 from "../images/bg.png"
import image2 from "../images/gitdp.png"
import image3 from "../images/retro.jpeg"
// import image4 from "https://photos.google.com/share/AF1QipP2v3mEBB1_ReWY21NHLmyG3yHL9J__rb5Msr0C2pDP5r04gHSATxpvoVE2bzcCfg/photo/AF1QipMo9tKAzSwGreQSlFNgfG3pN1ru0fpBl77Cn6Iw?key=QktwMjdtNTVybFJfb29VZ2hWSW1NQjFqa0ppUlR3"//https://photos.app.goo.gl/wwJPWPrs7x3Xcer78""

 

function Slideshow(props){
  const slideImages = [
    props.galleryImages[0],
    props.galleryImages[1],
    props.galleryImages[2],
    // image2,
    // image3,
    // image4
  //   '../images/bg.png',
  //   '../images/bg.png',
  ];
   
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  }
  
  const style=[{
    'backgroundImage': `url(${slideImages[0]})`,
    'width':'80%',
    'margin':'auto',
    'height':'400px',
    'background-size': '110%',
  
  },
  {
  'backgroundImage': `url(${slideImages[1]})`,
    'width':'80%',
    'margin':'auto',
    'height':'400px',
    'background-size': '110%',
  
  },
  {
  'backgroundImage': `url(${slideImages[2]})`,
    'width':'80%',
    'margin':'auto',
    'height':'400px',
    'background-size': '110%',
  
  }]
   
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={style[0]}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={style[1]}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={style[2]}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow