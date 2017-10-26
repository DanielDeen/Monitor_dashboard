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
	    <Menu.Item key="/">
	      <Link to="/"><Icon type="bars" />Swift监控系统</Link>
	    </Menu.Item>

	    <Menu.Item key="/service">
				<Link to="/service"><Icon type="home" />系统服务状态</Link>
		</Menu.Item>

		<Menu.Item key="/log">
				<Link to="/log"><Icon type="desktop" />系统日志分析</Link>
		</Menu.Item>

		<Menu.Item key="/users">
				<Link to="/users"><Icon type="eye-o" />存储用户管理</Link>
		</Menu.Item>
	</Menu>
	)
}


export default Header;