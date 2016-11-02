import React from 'react';
import { Carousel } from 'antd';
import { Row, Col } from 'antd';
import styles from './ImgCarousel.less';



const ImgCarousel = (props) => {
  return (
    <div>
        <Row>
            <Col span={20} push={2}>         
                <Carousel autoplay>
                  <div><img style={ {width:'100%'} } src={require('../components/imgs/1.jpg')} alt="1" /></div>
                  <div><img style={ {width:'100%'} } src={require('../components/imgs/2.jpg')} alt="2" /></div>    
                  <div><img style={ {width:'100%'} } src={require('../components/imgs/3.jpg')} alt="3" /></div>
                  <div><img style={ {width:'100%'} } src={require('../components/imgs/4.jpg')} alt="4" /></div>
                  <div><img style={ {width:'100%'} } src={require('../components/imgs/5.jpg')} alt="5" /></div>
                  <div><img style={ {width:'100%'} } src={require('../components/imgs/6.jpg')} alt="6" /></div>
                </Carousel>
            </Col>
        </Row>
    </div>
  );
};

ImgCarousel.propTypes = {
};

export default ImgCarousel;
