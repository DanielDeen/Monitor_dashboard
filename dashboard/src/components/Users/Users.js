import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Table, Pagination, Popconfirm, Button } from 'antd';
import styles from './Users.css';
import { PAGE_SIZE } from '../../constants';

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
      dataIndex: 'website',
      key: 'website',
    },
    {
      title: '已使用量',
      dataIndex: 'website',
      key: 'website',
    },
    {
      title: '设置',
      key: 'operation',
      render: (text, { id }) => (
        <span className={styles.operation}>
          <a href="">编辑</a>
          <Popconfirm title="确定?" onConfirm={deleteHandler.bind(null, id)}>
            <a href="">删除用户</a>
          </Popconfirm>
        </span>
      ),
    },
  	];
  return (
    <div className={styles.normal}>
      <div>
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
