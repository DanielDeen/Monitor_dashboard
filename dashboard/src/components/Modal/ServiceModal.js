import { Modal, Button } from 'antd';
import { Tabs,Icon } from 'antd';
import NewServiceForm from '../Form/NewServiceForm';

const TabPane = Tabs.TabPane;

class ServiceModal extends React.Component {
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
      <div style={{ display: "inline",marginLeft: 100 }}>
        <Button type="primary" onClick={this.showModal}><Icon type="plus" />新增监控服务</Button>
        <Modal
          title="新增设置"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <NewServiceForm />
        </Modal>
      </div>
    );
  }
}

export default ServiceModal;