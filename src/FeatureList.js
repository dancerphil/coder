import React, { Component } from 'react';
import Modal from 'antd/lib/modal';
import 'antd/lib/modal/style/css';
import Checkbox from 'antd/lib/checkbox';
import 'antd/lib/checkbox/style/css';

class FeatureList extends Component {
  state = {
    visible: true
  }
  handleClose = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <Modal
        title="功能列表"
        visible={this.state.visible}
        onOk={this.handleClose}
        onCancel={this.handleClose}
      >
        <Checkbox checked={true}>JavaScript 语法高亮与自动提示</Checkbox><br />
        <Checkbox checked={true}>JavaScript 运行结果</Checkbox><br />
        <Checkbox checked={true}>本地代码保存</Checkbox><br />
        <Checkbox checked={false}>多文件</Checkbox><br />
        <Checkbox checked={false}>Chrome 多设备代码同步</Checkbox><br />
        <Checkbox checked={false}>Python 支持</Checkbox><br />
      </Modal>
    );
  }
}

export default FeatureList;
