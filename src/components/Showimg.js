import React from 'react';
import { Row, Col } from 'antd';


const Showimg = (props) => {
  return (
	  	<Row>	
	  		<Col span={20} push={2}>
			    <div>
			      <img style={ {width:'100%'} } src={require('../components/imgs/subPage01.jpg')} alt="1" />
			    </div>
		    </Col>		    
		</Row>
  );
};

Showimg.propTypes = {
};

export default Showimg;
