import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import { Breadcrumb } from 'antd';
import styles from './Mes.less';



const Showimg = (props) => {
  return (
	  	<Row>	
	  		<Col span={4} offset={2}>
		    	<div>
            <h2><Icon type="heart" /> 关于我们 </h2>
		    		<Menu selectedKeys={[ ]}>
        				<Menu.Item key="qyjj">
          					<Link to="/">企业简介</Link>
        				</Menu.Item>
        				<Menu.Item key="qydt">
          					<Link to="/">企业动态</Link>
       					</Menu.Item>
       					<Menu.Item key="cxwh">
          					<Link to="/">创新文化</Link>
       					</Menu.Item>        				
       					<Menu.Item key="fzlc">
          					<Link to="/">发展历程</Link>
       					</Menu.Item>        		
       					<Menu.Item key="qyry">
          					<Link to="/">企业荣誉</Link>
       					</Menu.Item>        		
       					<Menu.Item key="lxwm">
          					<Link to="/">联系我们</Link>
       					</Menu.Item>        		
      				</Menu>
		    	</div>
		    </Col>
        <Col span={16} >
          <div   className={ styles.pageCrumbs }  >
            <Breadcrumb>
              <Breadcrumb.Item><Link to="/">首页</Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to="/gywm">关于我们</Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to="/gywm">企业动态</Link></Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div  className={ styles.newDetailBox } >
            <div className={ styles.newText } >
              <p>
              好未来（NYSE：XRS），英文缩写：TAL（Tomorrow Advancing Life），是一家中国领先的教育科技企业，以科技驱动、人才亲密、品质领先为发展的核心目标。自创立以来，一直致力于促进科技互联网与教育融合，为孩子创造更美好的学习体验。
              </p>  
              <p>
                十余年来，好未来致力科技互联网推动教育进步，旗下拥有子品牌：学而思培优、学而思网校、爱智康、励步英语、摩比、乐外教、家长帮、考研帮、高考帮和海边。其中，学而思培优作为 K12 高端培优教育平台，下设三个子品牌：学而思理科、乐加乐英语和东学堂语文。在全国 42个城市，共有 230 万学员走进好未来的课堂，另有 1700 多万学员通过线上获取优质的教育资源。另外，好未来旗下的家长帮是国内覆盖面广、可信度高的教育互联网信息平台，月度活跃用户达 3000 万人。
              </p> 
              <p>
                2010年10月20日，好未来的前身学而思在美国纽交所正式挂牌交易（NYSE:XRS），成为国内首家在美上市的中小学教育机构。
              </p>
              <p>
                好未来已投的已披露项目有宝宝树、Minerva大学、果壳网、Knewton多贝网、LTG、鲨鱼公园、嘿哈科技、奇迹曼特、轻轻家教、顺顺留学、小伴龙、学科网、作业盒子等。
              </p> 
              <p>
                未来之星--在线教育创业者服务平台！目前“未来之星”为在线教育CEO提供创业营、大讲堂、创业沙龙、联合招聘等公益服务。
              </p> 
            </div>
            <div className={ styles.ceo } >
              <div  className={ styles.ceoimg } >
                <img style={ {width:'100%'} } src={require('../components/imgs/inxes_01.jpg')} alt="1" />
              </div>
              <div  className={ styles.ceoinfo } >
                <h3>好未来CEO，张邦鑫</h3>
                <p>
                  张邦鑫是80后创业者。2003年在北大读硕士研究生期间与同学合伙创办奥数网，两年后正式将机构取名为学而思，2013年，集团正式更名好未来，实行多品牌发展，依托科技互联网推动教育进步。张邦鑫荣获“中国教育年度人物”、“安永新兴企业家奖”等多项教育类和企业类奖项，2016年入围由WISE联合EdTechXGlobal共同发布的全球教育科技创新者领袖榜单。
                </p>
              </div>  
            </div>
            <div  className={ styles.newText2 } >
              <h3>好未来愿景、使命、价值观</h3>            
              <h3>愿景——成为受尊敬的教育机构</h3>
              <p>              
                科技驱动：不断将科技与教育结合，推动行业创新，引领行业发展。
              </p>
              <p>
                人才亲密：不断吸引优秀人才进入教育行业，营造平等、尊重、反思、开放、分享的工作环境，让员工快乐工作、持续成长。
              </p>
              <p>
                品质领先：提供高品质的产品和服务，为客户创造价值，为股东带来长期回报。
              </p>
              <h3>
                使命——让学习更有效
              </h3>
              <p>
                让学习有更高的效率；让学习有更好的效果；让学习更加轻松有趣；让学习成为美好体验
              </p>
            </div>
          </div>
        </Col>
		</Row>
  );
};

Showimg.propTypes = {
};

export default Showimg;
