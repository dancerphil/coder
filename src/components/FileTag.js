import React from 'react';
import {Tag} from 'antd';
import { handleOpen } from "../interface/handlers/newFile";

const style = { borderRight: '1px #666666 solid' };
const newFileStyle = { color: '#888888' };

const FileTag = ({ isActive, children, onClick, onClose }) => {
  if (isActive) {
    return (
      <Tag
        closable
        className="tag"
        color="#666666"
        onClose={onClose}
      >
        {children}
      </Tag>
    );
  }
  return (
    <Tag
      closable
      className="tag"
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
    className="tag"
    style={newFileStyle}
    onClick={handleOpen}
  >
    {'+ new File'}
  </Tag>
);

export default FileTag;
