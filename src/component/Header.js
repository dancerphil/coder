import React, { Component } from 'react';
import Modal from 'antd/lib/modal';
import 'antd/lib/modal/style/css';
import Input from 'antd/lib/input';
import 'antd/lib/input/style/css';
import FileTag from './FileTag';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      name: '',
    };
    this.handleOpen = () => {
      this.setState({ open: true });
    };
    this.handleClose = () => {
      this.setState({ open: false });
    };
    this.handleSubmit = () => {
      this.props.handleFileNew(this.state.name);
      this.setState({ open: false });
    };
    this.handleChange = (e) => {
      this.setState({ name: e.target.value });
    };
  }
  render() {
    const { files, active, handleFileSelect, handleFileDelete } = this.props;
    return (
      <div style={{ height: '22px', background: 'rgb(51, 51, 51)', display: 'flex' }}>
        {files.map((item, index) => (
          <FileTag
            key={index}
            active={active === index}
            onClick={handleFileSelect(index)}
            onClose={(e) => {
              e.preventDefault();
              handleFileDelete(index);
            }}
          >
            {item.name}
          </FileTag>
        ))}
        <FileTag
          plus
          onClick={this.handleOpen}
        />
        <Modal
          title="新建文件"
          visible={this.state.open}
          onCancel={this.handleClose}
          onOk={this.handleSubmit}
        >
          <Input placeholder="文件名" value={this.state.name} onChange={this.handleChange} />
        </Modal>
      </div>
    );
  }
}

export default Header;
