import React from 'react';
import { Carousel } from 'antd';


const ImgCarousel = (props) => {
  return (
    <div>
    	 <Carousel >
    <div><h3>1 <img src={"./1.jpg"} alt="" /></h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </Carousel>
    </div>
  );
};

ImgCarousel.propTypes = {
};

export default ImgCarousel;
