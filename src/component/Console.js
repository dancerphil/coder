import React, { Component } from 'react';

class Console extends Component {
  render() {
    const { height, output } = this.props;
    return [
      <div
        key="resize"
        id="resize"
        style={{ height: '20px', fontSize: '12px', cursor: 'row-resize', background: '#333333' }}
      >
        <span style={{ marginLeft: '10px', color: '#909090' }}>Console</span>
      </div>,
      <div style={{ height: `${height}px`, overflow: 'auto', padding: '0 16px', background: '#272922' }} key="console" >
        <pre style={{ margin: 0 }}>{output}</pre>
      </div>,
    ];
  }
}

export default Console;
