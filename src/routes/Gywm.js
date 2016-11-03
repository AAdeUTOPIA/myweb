import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './Gywm.less';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Showimg from '../components/Showimg';
import Mes from '../components/Mes';



function Gywm() {
  return (
    <div className={styles.normal}>
      <Header />      
      <Showimg />
      <Mes />
      <Footer />
    </div>
  );
}

Gywm.propTypes = {
};

export default connect()(Gywm);
