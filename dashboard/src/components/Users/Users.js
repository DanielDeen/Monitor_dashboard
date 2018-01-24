import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Table, Pagination, Popconfirm, Button,Input,Col,Icon } from 'antd';
import styles from './Users.css';
import { PAGE_SIZE } from '../../constants';
import UserModal from '../Modal/UserModal';

function Users({ dispatch,list: dataSource,loading, total, page: current }) {

  function createHandler(values) {
    dispatch({
      type: 'users/create',
      payload: values,
    });
  }

	function deleteHandler(id) {
		dispatch({
      type: 'users/remove',
      payload: id,
    });
	}

  function pageChangeHandler(page) {
    dispatch(routerRedux.push({
      pathname: '/users',
      query: { page },
    }));
  }

  const dataSources = [
  {
    "id": 1,
    "name": "test",
    "username": "Bret",
    "email": "500GB",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "12",
    "website": "200MB",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "test001",
    "username": "Antonette",
    "email": "100GB",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "1",
    "website": "1.2KB",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Daniel",
    "username": "Samantha",
    "email": "1TB",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1000",
    "website": "1GB",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "John",
    "username": "Karianne",
    "email": "500GB",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "5",
    "website": "2GB",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Anorld",
    "username": "Kamren",
    "email": "300GB",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "100000",
    "website": "10GB",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  }
]

	const columns = [
	{
      title: '用户',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="">{text}</a>,
    },
    {
      title: '存储空间',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '对象数目',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: '已使用量',
      dataIndex: 'website',
      key: 'website',
    },
    {
      title: '用户管理',
      key: 'operation',
      render: (text, { id }) => (
        <span className={styles.operation}>
          <UserModal />
          <Popconfirm title="确定?" onConfirm={deleteHandler.bind(null, id)}>
            <a href="">删除用户</a>
          </Popconfirm>
        </span>
      ),
    },
  	];
  return (
    <div className={styles.normal}>
        <div style={{ marginTop: 20 }}>
            <Col span={16}>
                   <Input placeholder="查找用户"></Input>
            </Col>
            <Col span={1}/>
            <Col>
                <Button type="primary" icon="search">查询</Button>
            </Col>
        </div>
        <div style={{ marginTop: 15 }}>
            <div className={styles.create}>
            </div>
            <Table
              columns={columns}
              dataSource={dataSources}
              loading={loading}
              rowKey={record => record.id}
              pagination={false}
            />
            <Pagination
                  className="ant-table-pagination"
                  total={total}
                  current={current}
                  pageSize={PAGE_SIZE}
                  onChange={pageChangeHandler}
            />
        </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { list, total, page } = state.users;
  return {
    loading: state.loading.models.users,
    list,
    total,
    page,
  };
}

export default connect(mapStateToProps)(Users);
