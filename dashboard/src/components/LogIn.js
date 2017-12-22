import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Form, Icon, Input, Button, Checkbox, Layout, Menu, message } from 'antd';
import styles from './LogIn.css';
import { Link } from 'dva/router';

const FormItem = Form.Item;
const { Header, Content, Footer } = Layout;

class LogIn extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        if (values.userName === "1" && (values.password === "2")) {
            const w=window.open();
            w.location.href='/#/monitor';
        }else {
            message.info('用户名或密码错误！');
        }
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (

        <Layout className="layout">
            <Header>
              <div className="logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
              >
              <Menu.Item key="1">Swift监控系统 管理员登陆</Menu.Item>
              </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                
                <div style={{ background: '#fff', padding: 24, minHeight: 600 }}>

                <Form onSubmit={this.handleSubmit} className="login-form" style={{ width:300, marginTop: 100,marginLeft:400 }}>
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入用户名' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>记住密码</Checkbox>
                        )}
                        <a className="login-form-forgot" href="" style={{ marginLeft:160 }}>忘记密码</a>
                        <br/>
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{ width:300 }}>
                            登陆
                        </Button>
                        <br/>  Or &nbsp;&nbsp;<a href="">注册</a>
                    </FormItem>
                </Form>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                MonitorDashboard ©2017 Created by Daniel
            </Footer>
        </Layout>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(LogIn);

export default WrappedNormalLoginForm;