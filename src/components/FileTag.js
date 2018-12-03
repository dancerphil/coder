import React from 'react';
import {Tag} from 'antd';
import { handleOpen } from "../interface/handlers/newFile";

const activeStyle = { borderRadius: 0, marginRight: 0, border: 0, lineHeight: '22px' };
const style = { borderRadius: 0, marginRight: 0, border: 0, lineHeight: '22px', borderRight: '1px #666666 solid' };
const newFileStyle = { borderRadius: 0, marginRight: 0, border: 0, lineHeight: '22px', color: '#888888' };

const FileTag = ({ isActive, children, onClick, onClose }) => {
  if (isActive) {
    return (
      <Tag
        closable
        color="#666666"
        style={activeStyle}
        onClose={onClose}
      >
        {children}
      </Tag>
    );
  }
  return (
    <Tag
      closable
      color="#333333"
      style={style}
      onClick={onClick}
      onClose={onClose}
    >
      {children}
    </Tag>
  );
}

export const NewFile = () =>(
  <Tag
    color="#333333"
    style={newFileStyle}
    onClick={handleOpen}
  >
    {'+ new File'}
  </Tag>
);

export default FileTag;
