import React from 'react';
import styles from '../common.css';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Table,Icon,Tag,Card } from 'antd';
import { Col, Row, Badge } from 'antd';

class Service extends React.Component{
	render() {
		return (
			<div>
			    <div style={{ marginTop: 20 }}> 
			      	<Badge count={3}>
      					<Tag color="#108ee9">Storage_1</Tag>
    				</Badge>系统服务状态
			    </div>
				<div style={{ background: '#ECECEC', padding: '5px', marginTop: 10 }}>
				    <Row >
				      <Col span={6}>
				        <Card title="租户空间服务" >
				        	<p className={styles.normal}>OK</p>
				        </Card>
				      </Col>
				      <Col span={6}>
				        <Card title="租户空间审计" >
				        	<p className={styles.normal}>OK</p>
				        </Card>
				      </Col>
				      <Col span={6}>
				        <Card title="租户空间复制" >
				        	<p className={styles.normal}>OK</p>
				        </Card>
				      </Col>
				      <Col span={6}>
				        <Card title="子存储空间服务" >
				        	<p className={styles.normal}>OK</p>
				        </Card>
				      </Col>
				      <Col span={6}>
				        <Card title="子存储空间审计" >
				        	<p className={styles.normal}>OK</p>
				        </Card>
				      </Col>
				      <Col span={6}>
				        <Card title="子存储空间复制" >
				        	<p className={styles.normal}>OK</p>
				        </Card>
				      </Col>
				      <Col span={6}>
				        <Card title="子存储空间更新" >
				        	<p className={styles.normal}>OK</p>
				        </Card>
				      </Col>
				      <Col span={6}>
				        <Card title="对象服务" >
				        	<p className={styles.normal}>OK</p>
				        </Card>
				      </Col>
				      <Col span={6}>
				        <Card title="对象审计" >
				        	<p className={styles.normal}>OK</p>
				        </Card>
				      </Col>
				      <Col span={6}>
				        <Card title="对象复制" >
				        	<p className={styles.normal}>OK</p>
				        </Card>
				      </Col>
				      <Col span={6}>
				        <Card title="对象更新" >
				        	<p className={styles.normal}>OK</p>
				        </Card>
				      </Col>
				      <Col span={6}>
				        <Card title="API服务" >
				        	<p className={styles.normal}>OK</p>
				        </Card>
				      </Col>
				    </Row>
				</div>
				<div style={{ marginTop: 20 }}> 
			      	<Badge count={2}>
      					<Tag color="#108ee9">Storage_2</Tag>
    				</Badge>系统服务状态
			    </div>
				<div style={{ background: '#ECECEC', padding: '5px', marginTop: 10 }}>
				    <Row >
				      <Col span={6}>
				        <Card title="租户空间服务" >
				        	<p className={styles.normal}>OK</p>
				        </Card>
				      </Col>
				      <Col span={6}>
				        <Card title="租户空间审计" >
				        	<p className={styles.normal}>OK</p>
				        </Card>
				      </Col>
				      <Col span={6}>
				        <Card title="租户空间复制" >
				        	<p className={styles.normal}>OK</p>
				        </Card>
				      </Col>
				      <Col span={6}>
				        <Card title="子存储空间服务" >
				        	<p className={styles.normal}>OK</p>
				        </Card>
				      </Col>
				      <Col span={6}>
				        <Card title="子存储空间审计" >
				        	<p className={styles.normal}>OK</p>
				        </Card>
				      </Col>
				      <Col span={6}>
				        <Card title="子存储空间复制" >
				        	<p className={styles.normal}>OK</p>
				        </Card>
				      </Col>
				      <Col span={6}>
				        <Card title="子存储空间更新" >
				        	<p className={styles.normal}>OK</p>
				        </Card>
				      </Col>
				      <Col span={6}>
				        <Card title="对象服务" >
				        	<p className={styles.normal}>OK</p>
				        </Card>
				      </Col>
				      <Col span={6}>
				        <Card title="对象审计" >
				        	<p className={styles.normal}>OK</p>
				        </Card>
				      </Col>
				      <Col span={6}>
				        <Card title="对象复制" >
				        	<p className={styles.normal}>OK</p>
				        </Card>
				      </Col>
				      <Col span={6}>
				        <Card title="对象更新" >
				        	<p className={styles.normal}>OK</p>
				        </Card>
				      </Col>
				      <Col span={6}>
				        <Card title="API服务" >
				        	<p className={styles.normal}>OK</p>
				        </Card>
				      </Col>
				    </Row>
				</div>
				<div style={{ marginTop: 20 }}> 
			      	<Badge count={0}>
      					<Tag color="#108ee9">Storage_3</Tag>
    				</Badge>系统服务状态
			    </div>
				<div style={{ background: '#ECECEC', padding: '5px', marginTop: 10 }}>
				    <Row >
				      <Col span={6}>
				        <Card title="租户空间服务" >
				        	<p className={styles.normal}>OK</p>
				        </Card>
				      </Col>
				      <Col span={6}>
				        <Card title="租户空间审计" >
				        	<p className={styles.normal}>OK</p>
				        </Card>
				      </Col>
				      <Col span={6}>
				        <Card title="租户空间复制" >
				        	<p className={styles.normal}>OK</p>
				        </Card>
				      </Col>
				      <Col span={6}>
				        <Card title="子存储空间服务" >
				        	<p className={styles.normal}>OK</p>
				        </Card>
				      </Col>
				      <Col span={6}>
				        <Card title="子存储空间审计" >
				        	<p className={styles.normal}>OK</p>
				        </Card>
				      </Col>
				      <Col span={6}>
				        <Card title="子存储空间复制" >
				        	<p className={styles.normal}>OK</p>
				        </Card>
				      </Col>
				      <Col span={6}>
				        <Card title="子存储空间更新" >
				        	<p className={styles.normal}>OK</p>
				        </Card>
				      </Col>
				      <Col span={6}>
				        <Card title="对象服务" >
				        	<p className={styles.normal}>OK</p>
				        </Card>
				      </Col>
				      <Col span={6}>
				        <Card title="对象审计" >
				        	<p className={styles.normal}>OK</p>
				        </Card>
				      </Col>
				      <Col span={6}>
				        <Card title="对象复制" >
				        	<p className={styles.normal}>OK</p>
				        </Card>
				      </Col>
				      <Col span={6}>
				        <Card title="对象更新" >
				        	<p className={styles.normal}>OK</p>
				        </Card>
				      </Col>
				      <Col span={6}>
				        <Card title="API服务" >
				        	<p className={styles.normal}>OK</p>
				        </Card>
				      </Col>
				    </Row>
				</div>
			</div>
		);
	}
}

export default Service;