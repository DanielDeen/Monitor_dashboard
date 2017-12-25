import { Form, Row, Col, Input, Button, Icon } from 'antd';
import style from '../common.css';
import { Radio } from 'antd';
const RadioGroup = Radio.Group;

const FormItem = Form.Item;

class AlarmForm extends React.Component {
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
        <FormItem label='报警项名称'>
          {getFieldDecorator(`itemname`)(
            <Input placeholder="报警项名称" />
          )}
        </FormItem>
        <FormItem label='报警表达式'>
          {getFieldDecorator(`formula`)(
            <Input placeholder="报警表达式" />
          )}
        </FormItem>
        <FormItem label='报警方式'>
          {getFieldDecorator(`way`)(
            <RadioGroup onChange={this.onChange} value={this.state.value}>
              <Radio value={1}>短信通知</Radio>
              <Radio value={2}>邮件通知</Radio>
              <Radio value={3}>短信邮件通知</Radio>
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

const NewAlarmForm = Form.create()(AlarmForm);

export default NewAlarmForm;