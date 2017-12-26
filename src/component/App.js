import React, { Component } from 'react';
import Editor from './Editor';
import FeatureList from './FeatureList';
import Console from './Console';
import Header from './Header';

class App extends Component {
  render() {
    const { consoleState, files, active, output, handleClick, handleTextChange, handleMouseDown, handleMouseMove, handleMouseUp } = this.props;
    const { height, mouseDown } = consoleState;
    const { code } = files[active];
    // Header 22px, Console 20px + height, Editor rest
    const editorStyle = { height: `calc(100vh - ${42 + height}px)`, width: '100%', background: '#272922' };
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
        <Header files={files} active={active} />
        {editor}
        <Console height={height} output={output} />
        <FeatureList />
      </div>
    );
  }
}

export default App;
