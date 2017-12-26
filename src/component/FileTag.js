import React, { Component } from 'react';
import Tag from 'antd/lib/tag';
import 'antd/lib/tag/style/css';

class FileTag extends Component {
  render() {
    const { active, children, plus } = this.props;
    const style = { borderRadius: 0, marginRight: 0, border: 0, lineHeight: '22px' };
    if (active) {
      return (
        <Tag
          closable
          color="#666666"
          style={style}
        >
          {children}
        </Tag>
      );
    }
    if (plus) {
      return (
        <Tag
          closable={!plus}
          color="#333333"
          style={Object.assign(style, { color: '#888888' })}
        >
          {'+ new File'}
        </Tag>
      );
    }
    return (
      <Tag
        closable
        color="#333333"
        style={Object.assign(style, { borderRight: '1px #666666 solid' })}
      >
        {children}
      </Tag>
    );
  }
}

export default FileTag;
