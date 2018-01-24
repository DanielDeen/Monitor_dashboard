import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import NodeModal from '../Modal/NodeModal';
import AlarmModal from '../Modal/AlarmModal';
import { Card, Col, Row } from 'antd';
import { Tag,Table } from 'antd';

const { CheckableTag } = Tag;

function IndexPage( {loaction} ) {

    const columns = [{
        title: '时间',
        dataIndex: 'time',
        width: 200,
    }, {
        title: '节点IP',
        dataIndex: 'address',
        width: 200,
    }, {
        title: '报错信息',
        dataIndex: 'info',
    }];

    const data = [];
    for (let i = 31; i > 0; i--) {
        if (i < 10){
          i = '0' + i;
        }
        data.push({
          key: i,
          time: `2017-3-30 9:${i}`,
          address: `192.168.2.80`,
          info: `swifft-account服务异常`,
        });
    }

    return (
          <div >
            <div style={{ background: '#ECECEC', padding: '10px', marginTop: 20 }}>
                存储节点列表 &nbsp;&nbsp;&nbsp;
                <Tag>Storage_1</Tag>
                <Tag>Storage_2</Tag>
                <Tag>Storage_3</Tag>
            </div>
            <div style={{ marginTop: 20 }}>
              <Row gutter={16}>
                <Col span={8}>
                  <Card title="系统总存储" extra={<NodeModal />} >
                    <p className={styles.normal}>120T</p>
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="系统已用存储" extra={<NodeModal />} >
                    <p className={styles.normal}>1.8T</p>
                  </Card>
                </Col>
                <Col span={8}>
                <Card title="系统剩余存储" extra={<NodeModal />} >
                    <p className={styles.normal}>118T</p>
                  </Card>
                </Col>
              </Row>
            </div>
            <div style={{ marginTop: 20 }}>
            <div>
            <h3 style={{ display: "inline" }}>报警汇总</h3>   
            <AlarmModal />
            </div>
            </div>
            <div style={{ marginTop: 15 }}>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 15 }} scroll={{ y: 320 }} />
            </div>
          </div>  
      );
}

export default IndexPage;
