import React from 'react';
import styles from './Footer.less';
import { Card } from 'antd';

const Footer = (props) => {
  return (
    <div>
       <Card className={styles.card} style={{ width: 960 }}>
        <p>
          <a href="http://www.100tal.com/gywm/contactus">联系我们</a> | 
          <a href="http://en.xueersi.org/investor/" target="_blank">投资者关系</a> | 
          <a href="http://job.xueersi.org/" target="_blank">诚聘英才</a> | 
          <a href="http://www.100tal.com/company/lawstate">法律声明</a>| 
          <a href="http://www.100tal.com/company/careernorm">执业准则</a> | 
          <a href="http://www.100tal.com/company/reportmechanism">举报机制</a>
        </p>
        <p>Copyright &#169; 2013,好未来版权所有 北京世纪好未来教育科技有限公司 京ICP备09032638号-7</p>
      </Card>      
    </div>
  );
};

Footer.propTypes = {
};

export default Footer;
