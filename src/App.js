import React, { Component } from 'react';
import Editor from './Editor'

class App extends Component {
  state = {
    code: '',
    output: ''
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
  onChange = (value) => {
    this.setState({ code: value });
  }
  render() {
    const height = 160;
    return (
      <div style={{ width: '100%', height: '100%', color: '#f8f8f2' }} onClick={this.handleClick}>
        <Editor
          style={{ height: `calc(100vh - ${20 + height}px)`, width: '100%' }}
          onChange={this.onChange}
          code={this.state.code}
        />
        <div style={{ height: '20px', fontSize: '12px', cursor: 'row-resize', background: '#333333' }}>
          <span style={{ marginLeft: '10px', color: '#909090' }}>Console</span>
        </div>
        <div style={{ height: `${160}px`, overflow: 'auto', padding: '0 16px', background: '#272922' }} >
          <pre style={{ margin: 0 }}>{this.state.output}</pre>
        </div>
      </div>
    );
  }
}

export default App;
