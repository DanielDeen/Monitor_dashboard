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
              dataSource={dataSource}
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
