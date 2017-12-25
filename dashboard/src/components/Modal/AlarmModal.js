import styles from '../common.css';
import { Modal, Button,Table } from 'antd';
import { Tabs,Icon, Divider } from 'antd';
import { Form, Row, Col, Input } from 'antd';
import NewAlarmForm from '../Form/NewAlarmForm';

const TabPane = Tabs.TabPane;

const data = [{
  key: '1',
  id: 1,
  name: 'swift-accout服务异常',
  formula: 'value > 0',
}, {
  key: '2',
  id: 2,
  name: 'swift-audit服务异常',
  formula: 'value > 0',
}, {
  key: '3',
  id: 3,
  name: 'swift-replicator服务异常',
  formula: 'value > 0',
}];


const columns = [
  {
    title: '编号',
    dataIndex: 'id',
    key: 'id',
  }, 
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  }, 
  {
    title: '表达式',
    dataIndex: 'formula',
    key: 'formula',
  }, 
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="#" className="ant-dropdown-link">
          编辑   </a> 
        <a href="#">   删除</a>
      </span>
    ),
  }];

class AlarmModal extends React.Component {

  state = {
      visible: false
    }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div style={{ display: "inline",marginLeft: 1520 }}>
        <Button type="primary" onClick={this.showModal}>报警设置</Button>
        <Modal
          title="报警设置"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width='900'
        >
        <Tabs defaultActiveKey="1" size="large">
            <TabPane tab="报警项新增" key="1">
            <NewAlarmForm />
            </TabPane>
            <TabPane tab="报警项预览编辑" key="2">
              <Table columns={columns} dataSource={data} />
            </TabPane>
        </Tabs>
        </Modal>
      </div>
    );
  }
}

export default AlarmModal;