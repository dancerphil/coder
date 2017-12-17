import React, { Component } from 'react';
import Editor from './Editor'

class App extends Component {
  state = {
    code: '',
    output: '',
    consoleState: {
      height: 160,
      mouseDown: false,
    }
  }
  componentDidMount() {
    const defaultLog = console.log;
    const that = this;
    const componentLog = function componentLog() {
      let args = Array.prototype.slice.call(arguments);
      args = args.join(' ');
      that.state.output = that.state.output + args + '\n';
    };
    console.log = function log() {
      componentLog(...arguments);
      defaultLog(...arguments);
    };
  }
  handleClick = () => {
    this.state.output = '';
    const code = this.state.code;
    try {
      eval(code);
    } catch (e) {
      console.log(e)
    }
    this.forceUpdate()
  }
  onTextChange = (value) => {
    this.setState({ code: value });
  }
  handleMouseDown = (e) => {
    if (e.target.id === 'resize') {
      this.preY = e.clientY;
      this.state.consoleState.mouseDown = true;
    }
  }
  handleMouseMove = (e) => {
    const consoleState = this.state.consoleState;
    if (consoleState.mouseDown) {
      const dy = this.preY - e.clientY;
      this.preY = e.clientY;
      consoleState.height += dy;
      if (consoleState.height < 0) {
        consoleState.height = 0;
        consoleState.mouseDown = false;
      }
      this.forceUpdate();
    }
  }
  handleMouseUp = () => {
    const consoleState = this.state.consoleState;
    consoleState.mouseDown = false;
    this.forceUpdate();
  }
  render() {
    const { height } = this.state.consoleState;
    return (
      <div
        style={{ width: '100%', height: '100%', color: '#f8f8f2' }}
        onClick={this.handleClick}
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
        onMouseUp={this.handleMouseUp}
      >
        <Editor
          style={{ height: `calc(100vh - ${20 + height}px)`, width: '100%' }}
          onChange={this.onTextChange}
          code={this.state.code}
        />
        <div
          id={'resize'}
          style={{ height: '20px', fontSize: '12px', cursor: 'row-resize', background: '#333333' }}
        >
          <span style={{ marginLeft: '10px', color: '#909090' }}>Console</span>
        </div>
        <div style={{ height: `${height}px`, overflow: 'auto', padding: '0 16px', background: '#272922' }} >
          <pre style={{ margin: 0 }}>{this.state.output}</pre>
        </div>
      </div>
    );
  }
}

export default App;
