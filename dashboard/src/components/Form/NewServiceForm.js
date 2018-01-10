import { Form, Row, Col, Input, Button, Icon } from 'antd';
import style from '../common.css';
import { Radio } from 'antd';
const RadioGroup = Radio.Group;

const FormItem = Form.Item;

class ServiceForm extends React.Component {
  state = {
    expand: false,
    value:1,
  }

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    // this.setState({
    //   value: e.target.value,
    // });
  }

  handleSearch = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  }

  handleReset = () => {
    this.props.form.resetFields();
  }

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  }

  // To generate mock Form.Item
  getFields() {
    const { getFieldDecorator } = this.props.form;
    const children = [];
    children.push(
      <Col>
        <FormItem label='服务名称'>
          {getFieldDecorator(`itemname`)(
            <Input placeholder="服务名" />
          )}
        </FormItem>
        <FormItem label='部署节点'>
          {getFieldDecorator(`way`)(
            <RadioGroup onChange={this.onChange} value={this.state.value}>
              <Radio value={1}>所有节点</Radio>
              <Radio value={2}>指定节点</Radio>
            </RadioGroup>
          )}
        </FormItem>
      </Col>
    );

    return children;
  }



  render() {
    return (
      <Form
        className="ant-advanced-search-form"
        onSubmit={this.handleSearch}
      >
        <Row gutter={24}>{this.getFields()}</Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">新增</Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              清空
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

const NewServiceForm = Form.create()(ServiceForm);

export default NewServiceForm;