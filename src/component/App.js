import React, { Component } from 'react';
import Editor from './Editor';
import FeatureList from './FeatureList';

class App extends Component {
  render() {
    const { consoleState, files, active, output, handleClick, handleTextChange, handleMouseDown, handleMouseMove, handleMouseUp } = this.props;
    const { height, mouseDown } = consoleState;
    const { code } = files[active];
    const editorStyle = { height: `calc(100vh - ${20 + height}px)`, width: '100%', background: '#272922' };
    let editor = (
      <Editor
        style={editorStyle}
        onChange={handleTextChange}
        code={code}
      />
    );
    if (mouseDown) {
      editor = <div style={editorStyle} />;
    }
    return (
      <div
        style={{ width: '100%', height: '100%', color: '#f8f8f2' }}
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {editor}
        <div
          id="resize"
          style={{ height: '20px', fontSize: '12px', cursor: 'row-resize', background: '#333333' }}
        >
          <span style={{ marginLeft: '10px', color: '#909090' }}>Console</span>
        </div>
        <div style={{ height: `${height}px`, overflow: 'auto', padding: '0 16px', background: '#272922' }}>
          <pre style={{ margin: 0 }}>{output}</pre>
        </div>
        <FeatureList />
      </div>
    );
  }
}

export default App;
