import React from 'react';
import { Carousel } from 'antd';


const ImgCarousel = (props) => {
  return (
    <div>
    	 <Carousel autoplay>
          <div><img src={require('../components/1.jpg')} alt="1" /></div>
          <div><img src={require('../components/2.jpg')} alt="2" /></div>    
          <div><img src={require('../components/3.jpg')} alt="3" /></div>
          <div><img src={require('../components/4.jpg')} alt="4" /></div>
          <div><img src={require('../components/5.jpg')} alt="5" /></div>
          <div><img src={require('../components/6.jpg')} alt="6" /></div>
      </Carousel>
    </div>
  );
};

ImgCarousel.propTypes = {
};

export default ImgCarousel;
