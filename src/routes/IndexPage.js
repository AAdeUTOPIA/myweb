import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.less';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Brand from '../components/Brand';
import ImgCarousel from '../components/ImgCarousel';



function IndexPage() {
  return (
    <div className={styles.normal}>
      <Header />      
      <ImgCarousel />
      <Brand />
      <Footer />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
