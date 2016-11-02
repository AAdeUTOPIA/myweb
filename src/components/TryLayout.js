import React from 'react';
import { Row, Col } from 'antd';

const TryLayout = (props) => {
  return (
    <div>
    <Row>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Row>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
    </Row>
    <Row>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
    </Row>
    <Row>
    <Col xs={24} sm={4} md={12} lg={8}>Col</Col>
    <Col xs={24} sm={16} md={12} lg={8}>Col</Col>
    <Col xs={24} sm={4} md={24} lg={8}>Col</Col>
  </Row>
  </div> 
  );
};

TryLayout.propTypes = {
};

export default TryLayout;
