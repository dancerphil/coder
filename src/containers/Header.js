import React from 'react';
import { connectWith } from 'redux-loadings'
import FileTag, {NewFile} from '../components/FileTag';
import { handleFileSelect, handleFileDelete } from '../interface/handlers/files';

const Header = ({ files, active }) => (
  <div style={{ height: '22px', background: 'rgb(51, 51, 51)', display: 'flex' }}>
    {files.map((item, index) => (
      <FileTag
        key={index}
        isActive={active === index}
        onClick={handleFileSelect(index)}
        onClose={(e) => {
          e.preventDefault();
          handleFileDelete(index);
        }}
      >
        {item.name}
      </FileTag>
    ))}
    <NewFile />
  </div>
);

export default connectWith(['files', 'active'],Header);
