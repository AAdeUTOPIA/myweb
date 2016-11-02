import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './Gywm.less';
import Header from '../components/Header';
import Footer from '../components/Footer';



function Gywm() {
  return (
    <div>
      <Header />      
      
      <Footer />
    </div>
  );
}

Gywm.propTypes = {
};

export default connect()(Gywm);
