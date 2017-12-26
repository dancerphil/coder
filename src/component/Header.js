import React, { Component } from 'react';
import FileTag from './FileTag';

class Header extends Component {
  render() {
    const { files, active } = this.props;
    return (
      <div style={{ height: '22px', background: 'rgb(51, 51, 51)', display: 'flex' }}>
        {files.map((item, index) => (
          <FileTag active={active === index} >{item.name}</FileTag>
        ))}
        <FileTag plus />
      </div>
    );
  }
}

export default Header;
