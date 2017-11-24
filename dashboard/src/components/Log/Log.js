import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Table,Icon } from 'antd';
import HorizontalTimeline from '../timeline/HorizontalTimeline';
import { Col, Row } from 'antd';
import moment from 'moment';


const columns = [{
		title: '时间戳',
		dataIndex: 'name',
		key: 'name',
		render: text => <a href="#">{text}</a>,
	}, {
	    title: '节点IP',
	    dataIndex: 'age',
	    key: 'age',
	}, {
  		title: '报错信息',
  		dataIndex: 'address',
  		key: 'address',
	},{
  		title: '级别',
  		dataIndex: 'level',
  		key: 'level',
	}];

const data = [{
  		key: '1',
  		name: 'John Brown',
  		age: 32,
  		address: 'New York No. 1 Lake Park',
  		level: '1',
	}, {
  		key: '2',
  		name: 'Jim Green',
  		age: 42,
  		address: 'London No. 1 Lake Park',
  		level: '2'
	}, {
  		key: '3',
  		name: 'Joe Black',
  		age: 32,
  		address: 'Sidney No. 1 Lake Park',
  		level: '3'
	}];

const queryTime = 1511264560;
const timeLineEvents = { "1511264510":1, "1511264563":0};

const timeClick = queryTime;
const selectedIndex = queryTime;
const preTimeClick = queryTime;
const nextTimeClick = queryTime;

class Log extends React.Component{

	render() {
		return (
			<div>
				<div style={{ marginLeft:"40px",marginRight: 40}}>
					<Row>
						<Col span={8}><Icon type="clock-circle"/>
							当前数据时间{moment(queryTime).format("YYYY-MM-DD HH:mm")}
						</Col>
						<Col span={11}/>
					</Row>
					<Row style={{marginTop:10}}>
						<Col span={24}>
							<HorizontalTimeline events={timeLineEvents} selectedIndex={selectedIndex}
												onTimeClick={timeClick}
												onPreTimeClick={preTimeClick}
												onNextTimeClick={nextTimeClick}/>
						</Col>
					</Row>
				</div>
				<div>
					<Table columns={columns} dataSource={data} />
				</div>
			</div>
		);
	}
}

export default Log;