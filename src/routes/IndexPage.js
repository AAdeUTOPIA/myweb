import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.less';
import Header from '../components/Header';
import NAO from '../components/NAO';
import Footer from '../components/Footer';
import Brand from '../components/Brand';
import ImgCarousel from '../components/ImgCarousel';



function IndexPage() {
  return (
    <div className={styles.normal}>
      <NAO />
      <h1>Welc1111ome to dva!</h1>
      <Header />
      <hr />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/sorrycc/blog/issues/8" target="_blank">Getting Started</a></li>
      </ul>
      <div className='styles.wrapper'>
        <ImgCarousel />
      </div>
      <div className='styles.wrapper'>
        <Brand />
      </div>
      <div className='styles.wrapper'>
        <Footer />
      </div>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
