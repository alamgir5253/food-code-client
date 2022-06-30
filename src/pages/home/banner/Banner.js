import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider from '../../../resource/banner-slider/slider.jpg'
import slider1 from '../../../resource/banner-slider/slider1.jpg'
import slider2 from '../../../resource/banner-slider/slider2.jpg'
import './Banner.css';
const Banner = () => {
  return (
    <div className=' border-b-8 bg-cyan-500'>
       <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-full"
      src={slider}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-full"
      src={slider1}
      alt="Second slide"
    />

  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-full"
      src={slider2}
      alt="Third slide"
    />

   
  </Carousel.Item>
</Carousel>
    </div>
  );
};

export default Banner;