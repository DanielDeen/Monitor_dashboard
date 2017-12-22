import { Modal, Button } from 'antd';
import { Tabs } from 'antd';
import { Checkbox } from 'antd';
const CheckboxGroup = Checkbox.Group;

const TabPane = Tabs.TabPane;

const plainOptions = ['读', '写', '删'];
const defaultCheckedList = ['读', '写'];

class UserModal extends React.Component {
  state = { 
        visible: false,
        checkedList: defaultCheckedList,
        indeterminate: true,
        checkAll: false,
   }
   onChange = (checkedList) => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
      checkAll: checkedList.length === plainOptions.length,
    });
  }
  onCheckAllChange = (e) => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
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
      <div>
        <a onClick={this.showModal}>编辑</a>
        <Modal
          title="xx用户"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <Tabs defaultActiveKey="1" size="small">
            <TabPane tab="基本信息" key="1">
                性别： 男 <br/>
                年龄：  18 <br/>
                手机号： 18888888888
            </TabPane>
            <TabPane tab="存储管理" key="2">

                总容量： 500M <br />
                剩余容量： 300M

            </TabPane>
            <TabPane tab="权限管理" key="3">
                <div>
                    <div style={{ borderBottom: '1px solid #E9E9E9' }}>
                      <Checkbox
                        indeterminate={this.state.indeterminate}
                        onChange={this.onCheckAllChange}
                        checked={this.state.checkAll}
                      >
                        权限选择
                      </Checkbox>
                    </div>
                    <br />
                    <CheckboxGroup options={plainOptions} value={this.state.checkedList} onChange={this.onChange} />
                </div> 
            </TabPane>
        </Tabs>
        </Modal>
      </div>
    );
  }
}

export default UserModal;