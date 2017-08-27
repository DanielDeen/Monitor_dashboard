import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

function Header ({ location }) {
  return (
    <Menu
      selectedKeys={[location.pathname]}
      mode="horizontal"
      theme="dark"
    >
	    <Menu.Item key="/tour">
	      <Link to="/users"><Icon type="bars" />导航栏</Link>
	    </Menu.Item>

	    <Menu.Item key="/">
				<Link to="/"><Icon type="home" />系统状态</Link>
		</Menu.Item>

		<Menu.Item key="/monitor">
				<Link to="/monitor"><Icon type="desktop" />监控指标状态</Link>
		</Menu.Item>

		<Menu.Item key="/users">
				<Link to="/monitor"><Icon type="user" />用户监控</Link>
		</Menu.Item>
	</Menu>
	)
}


export default Header;