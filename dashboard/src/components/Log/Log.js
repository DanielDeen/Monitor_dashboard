import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Table,Icon } from 'antd';
import HorizontalTimeline from '../timeline/HorizontalTimeline';
import { Col, Row } from 'antd';
import moment from 'moment'; 
import LineChart from '../timeline/Line';
import AlarmModal from '../Modal/AlarmModal';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

const columns = [{
		title: '时间戳',
		dataIndex: 'timestamp',
		key: 'timestamp',
	}, {
	    title: '节点IP',
	    dataIndex: 'ip',
	    key: 'ip',
	}, {
  		title: '报错信息',
  		dataIndex: 'info',
  		key: 'info',
	},{
  		title: '级别',
  		dataIndex: 'level',
  		key: 'level',
	},{
		title: '标记',
		dataIndex: 'marked',
		key:'marked',
		render: text => <a href="#">{text}</a>,
	}];

function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}

const data = [{
  		key: '1',
  		timestamp: '2017-3-30 8:59',
  		ip: '192.168.2.80',
  		info: '同步失败',
  		level: '1',
  		marked: '1',
	}, {
  		key: '2',
  		timestamp: '2017-3-30 8:40',
  		ip: '192.168.2.80',
  		info: '同步失败',
  		level: '2',
  		marked:'2',
	},{
  		key: '3',
  		timestamp: '2017-3-30 8:30',
  		ip: '192.168.2.80',
  		info: 'swift_replicater服务预警',
  		level: '3',
  		marked:'3'
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

				<div style={{ marginLeft:"40px",marginRight: 40,marginTop: 15}}>
					<Row>
						<Col span={8}><Icon type="clock-circle-o" />
							&nbsp;&nbsp;当前数据时间&nbsp;&nbsp;{moment(1490837520000).format("YYYY-MM-DD HH:mm")}
						</Col>
						<Col span={17}/>
						<RangePicker
					      showTime={{ format: 'HH:mm' }}
					      format="YYYY-MM-DD HH:mm"
					      placeholder={['开始时间', '结束时间']}
					      onChange={onChange}
					      onOk={onOk}
					    />
					</Row>
				</div>
				<div style={{ marginLeft:"40px",marginRight: 40}}><Icon type="area-chart" />&nbsp;&nbsp;系统负载曲线</div>
				<div style={{ marginLeft:"40px",marginRight: 40,marginTop: 15}}>  
	                <LineChart />  
            	</div> 
            	{/*
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
				*/}
				<div style={{ marginLeft:"40px",marginRight: 40,marginTop: 15}}>
					<Row>
						<div style={{ display: "inline" }}><Icon type="shake" />
							&nbsp;&nbsp;Swift系统错误报警
						</div>
						<AlarmModal />
					</Row>
				</div>

				<div style={{ marginLeft:"40px",marginRight: 40,marginTop: 20}}>
					<Table columns={columns} dataSource={data} />
				</div>
			</div>
		);
	}
}

export default Log;