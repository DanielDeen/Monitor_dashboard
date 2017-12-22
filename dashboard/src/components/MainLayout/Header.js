import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import { Link } from 'dva/router';
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker } = DatePicker;

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">管理员设置</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      <a href="#">退出</a>
    </Menu.Item>
  </Menu>
);

function Header ({ location }) {
  return (
    <Menu
      selectedKeys={[location.pathname]}
      mode="horizontal"
      theme="dark"
    >
	    <Menu.Item key="/monitor">
	      <Link to="/monitor"><Icon type="bars" />Swift监控系统</Link>
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
		<Menu.Item style={{marginLeft: 600}}>
			<Dropdown overlay={menu} trigger={['click']}>
			    <a className="ant-dropdown-link" style={{ color: "#108ee9" }}>
			      <Icon type="user" />Admin
			    </a>
			  </Dropdown>
				
		</Menu.Item>

	</Menu>
	)
}


export default Header;