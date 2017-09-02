import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Table,Icon } from 'antd';

const columns = [{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
		render: text => <a href="#">{text}</a>,
	}, {
	    title: 'Age',
	    dataIndex: 'age',
	    key: 'age',
	}, {
  		title: 'Address',
  		dataIndex: 'address',
  		key: 'address',
	}];

const data = [{
  		key: '1',
  		name: 'John Brown',
  		age: 32,
  		address: 'New York No. 1 Lake Park',
	}, {
  		key: '2',
  		name: 'Jim Green',
  		age: 42,
  		address: 'London No. 1 Lake Park',
	}, {
  		key: '3',
  		name: 'Joe Black',
  		age: 32,
  		address: 'Sidney No. 1 Lake Park',
	}];

class Monitor extends React.Component{
	render() {

		return (
			<div style={{ textAlign:"center" }}>
				<Table columns={columns} dataSource={data} />
			</div>
		);
	}
}

export default Monitor;