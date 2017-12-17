import React, { Component } from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/snippets/javascript';
import 'brace/theme/monokai';
// todo try move
import 'brace/ext/language_tools';
import 'brace/ext/searchbox';

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
    return (
      <div style={{ width: '100%', height: '100%', color: 'white' }} onClick={this.handleClick}>
        <AceEditor
          style={{ height: 'calc(100vh - 160px)', width: '100%' }}
          mode="javascript"
          theme="monokai"
          name="coder"
          onLoad={this.onLoad}
          onChange={this.onChange}
          onSelectionChange={this.onSelectionChange}
          onCursorChange={this.onCursorChange}
          onValidate={this.onValidate}
          value={this.state.code}
          fontSize={14}
          showPrintMargin
          showGutter
          highlightActiveLine
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
          }}
        />
        <div style={{ height: '160px', overflow: 'auto', padding: '0 16px' }} >
          <pre>{this.state.output}</pre>
        </div>
      </div>
    );
  }
}

export default App;
