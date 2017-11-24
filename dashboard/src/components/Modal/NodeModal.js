import { Modal, Button } from 'antd';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

class NodeMoal extends React.Component {
  state = { visible: false }
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
      <div>
        <Button type="primary" onClick={this.showModal}>各节点详情</Button>
        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <Tabs defaultActiveKey="2" size="small">
            <TabPane tab="Storage_1" key="1">总容量  10G<br/>已使用量  5G<br/>剩余量  5G</TabPane>
            <TabPane tab="Storage_2" key="2">总容量  10G<br/>已使用量  2.5G<br/>剩余量  7.5G</TabPane>
            <TabPane tab="Storage_3" key="3">总容量  10G<br/>已使用量  2.5G<br/>剩余量  7.5G</TabPane>
        </Tabs>
        </Modal>
      </div>
    );
  }
}

export default NodeMoal;