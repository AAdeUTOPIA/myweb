import React from 'react';
import styles from './Footer.less';
import { Row, Col } from 'antd';


const Footer = (props) => {
  return (
    <div>
        <Row>
            <p>
                <Col  xs={ 8 } lg={ { span: 3, offset: 3 } }><a className={styles.cardpa} href="http://www.100tal.com/gywm/contactus">联系我们</a> </Col>
                <Col  xs={ 8 } lg={ { span: 3 } }><a className={styles.cardpa} href="http://en.xueersi.org/investor/" target="_blank">投资者关系</a>  </Col>
                <Col  xs={ 8 } lg={ { span: 3 } }><a className={styles.cardpa} href="http://job.xueersi.org/" target="_blank">诚聘英才</a>  </Col>
                <Col  xs={ 8 } lg={ { span: 3 } }><a className={styles.cardpa} href="http://www.100tal.com/company/lawstate">法律声明</a> </Col>
                <Col  xs={ 8 } lg={ { span: 3 } }><a className={styles.cardpa} href="http://www.100tal.com/company/careernorm">执业准则</a>  </Col>
                <Col  xs={ 8 } lg={ { span: 3 } }><a className={styles.cardpa} href="http://www.100tal.com/company/reportmechanism">举报机制</a></Col>
            </p>
            <Col span={16} offset={4}>
                <div className={styles.normal} ><p>Copyright &#169; 2013,好未来版权所有 北京世纪好未来教育科技有限公司 京ICP备09032638号-7</p></div> 
            </Col>

        </Row>    
    </div>
  );
};

Footer.propTypes = {
};

export default Footer;
