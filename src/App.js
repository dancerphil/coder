import React, { Component } from 'react';

class App extends Component {
  state = {
    output: ''
  }
  componentDidMount() {
    const defaultLog = console.log;
    const that = this;
    const componentLog = function componentLog() {
      let args = Array(...arguments);
      args = args.join(' ');
      that.setState({ output: that.state.output + args + '\n' });
    };
    console.log = function log() {
      componentLog(...arguments);
      defaultLog(...arguments);
    };
  }
  handleClick = () => {
    const code = `console.log(1,2,3,4);`
    eval(code);
  }
  render() {
    return (
      <div style={{ width: '100%', height: '100%', color: 'white' }} onClick={this.handleClick}>
        <pre>{this.state.output}</pre>
      </div>
    );
  }
}

export default App;
