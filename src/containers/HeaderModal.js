import React from 'react';
import { connectWith} from 'redux-loadings'
import {Modal, Input} from 'antd';
import { handleClose, handleSubmit, handleChange } from '../interface/handlers/newFile';

const HeaderModal = ({open, name}) => (
  <Modal
    title="新建文件"
    visible={open}
    onCancel={handleClose}
    onOk={handleSubmit}
  >
    <Input placeholder="文件名" value={name} onChange={handleChange} />
  </Modal>
);

export default connectWith(['open', 'name'], HeaderModal);
