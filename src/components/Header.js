import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


const Header = (props) => {
  return (
    <Row type="flex"  justify="space-between" align="middle">
    	<Col span={4} offset={2}>
    		<div>
	      		<a href="https://www.baidu.com" target="_blank">
	      			<img style={ {width:'100%'} } src={require('../components/imgs/logo.png')} alt="1" />
	      		</a>
	      	</div>
      	</Col>
      	<Col span={12} pull={3}>
      		<div>
      			<Menu selectedKeys={[ ]} mode="horizontal">
	        		<SubMenu title={<span>关于我们</span>}>
	          			<MenuItemGroup >
	            			<Menu.Item key="aboutus:1">企业简介</Menu.Item>
	            			<Menu.Item key="aboutus:2">企业动态</Menu.Item>
	            			<Menu.Item key="aboutus:3">创新文化</Menu.Item>
	            			<Menu.Item key="aboutus:4">发展历程</Menu.Item>
	            			<Menu.Item key="aboutus:5">企业荣誉</Menu.Item>
	            			<Menu.Item key="aboutus:6">联系我们</Menu.Item>
	          			</MenuItemGroup>	          			
	        		</SubMenu>
	        		<SubMenu title={<span>业务体系</span>}>
	          			<MenuItemGroup >
	            			<Menu.Item key="yewu:1">学而思培优</Menu.Item>
	            			<Menu.Item key="yewu:2">东学堂语文</Menu.Item>
	            			<Menu.Item key="yewu:3">乐加乐英语</Menu.Item>
	            			<Menu.Item key="yewu:4">爱智康</Menu.Item>
	            			<Menu.Item key="yewu:5">学而思网校</Menu.Item>
	            			<Menu.Item key="yewu:6">摩比</Menu.Item>
	            			<Menu.Item key="yewu:7">家长帮</Menu.Item>
	            			<Menu.Item key="yewu:8">乐外教</Menu.Item>
	            			<Menu.Item key="yewu:9">励步英语</Menu.Item>
	            			<Menu.Item key="yewu:10">海边直播</Menu.Item>
	            			<Menu.Item key="yewu:11">图书出版</Menu.Item>
	          			</MenuItemGroup>	          			
	        		</SubMenu>
	        		<SubMenu title={<span>战略投资</span>}>
	          			<MenuItemGroup >
	            			<Menu.Item key="touzi:1">果壳</Menu.Item>
	            			<Menu.Item key="touzi:2">宝宝树</Menu.Item>
	            			<Menu.Item key="touzi:3">轻轻家教</Menu.Item>
	            			<Menu.Item key="touzi:4">顺顺留学</Menu.Item>
	            			<Menu.Item key="touzi:5">学科网</Menu.Item>
	            			<Menu.Item key="touzi:6">Minerva大学</Menu.Item>
	            			<Menu.Item key="touzi:7">关于投资</Menu.Item>
	          			</MenuItemGroup>	          			
	        		</SubMenu>
	        		<SubMenu title={<span>社会责任</span>}>
	          			<MenuItemGroup >
	            			<Menu.Item key="shehui:1">CEO寄语</Menu.Item>
	            			<Menu.Item key="shehui:2">公益事业</Menu.Item>
	            			<Menu.Item key="shehui:3">公益基金会</Menu.Item>
	          			</MenuItemGroup>	          			
	        		</SubMenu>
	        		<Menu.Item key="news">
	        			新闻中心
        			</Menu.Item>
      			</Menu>	
      		</div>
      	</Col>
    </Row>
  );
};

Header.propTypes = {
};

export default Header;
