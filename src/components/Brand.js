import React from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import styles from './Brand.less';
import { Row, Col } from 'antd';




const Brand = (props) => {

	
  return (
    <div>
        <Row type="flex"  justify="space-between" align="middle">
        	<Col span={4}>
                <h2 className={styles.brand}>好未来旗下品牌</h2>
            </Col>
           	<Col span={16}>
                <Menu className={styles.tab} selectedKeys={[]} mode="horizontal">
                	<Menu.Item key="1">
                		学而思理科
                	</Menu.Item>
                	<Menu.Item key="2">
                	  	东学堂语文
                	</Menu.Item>
                	<Menu.Item key="3">
                	  	乐加乐英语
                	</Menu.Item>
                	<Menu.Item key="4">
                	  	<a href="https://ant.design" target="_blank" rel="noopener noreferrer">爱智康</a>
                	</Menu.Item>
                	<Menu.Item key="5">
                		学而思网校
                	</Menu.Item>
                	<Menu.Item key="6">
                		摩比
                	</Menu.Item>
                	<Menu.Item key="7">
                		家长帮
                	</Menu.Item>
                	<Menu.Item key="8">
                		考研帮
                	</Menu.Item>
                	<Menu.Item key="9">
                		励步英语
                	</Menu.Item>
              	</Menu>
            </Col>
        </Row>
    </div>
  );
};

Brand.propTypes = {
};

export default Brand;
