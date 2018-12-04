import React, { useRef, useEffect } from 'react';
import { connectWith} from 'redux-loadings'
import {Modal, Input} from 'antd';
import { handleClose, handleSubmit, handleChange, handleKeyDown } from '../interface/handlers/newFile';

const HeaderInput = ({name}) => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.focus();
  });
  return <Input ref={ref} placeholder="文件名" value={name} onChange={handleChange} onKeyDown={handleKeyDown} />;
};

const HeaderModal = ({open, name}) => (
  <Modal
    title="新建文件"
    visible={open}
    onCancel={handleClose}
    onOk={handleSubmit}
  >
    <HeaderInput name={name} />
  </Modal>
);

export default connectWith(['open', 'name'], HeaderModal);
