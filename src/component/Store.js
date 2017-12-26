import React, { Component } from 'react';
import App from './App';
import defaultState from '../util/defaultState';
import { getLocal, setLocal } from '../util/local';

class Store extends Component {
  constructor() {
    super();
    this.state = defaultState;
    this.handles = {
      handleClick: () => {
        this.state.output = '';
        const { files, active } = this.state;
        const { code } = files[active];
        try {
          eval(code);
        } catch (e) {
          console.log(e);
        }
        this.forceUpdate();
      },
      handleTextChange: (value) => {
        const { active, files } = this.state;
        files[active].code = value;
        this.forceUpdate();
      },
      handleMouseDown: (e) => {
        if (e.target.id === 'resize') {
          this.preY = e.clientY;
          this.state.consoleState.mouseDown = true;
        }
      },
      handleMouseMove: (e) => {
        const { consoleState } = this.state;
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
      },
      handleMouseUp: () => {
        const { consoleState } = this.state;
        consoleState.mouseDown = false;
        this.forceUpdate();
      },
      handleFileNew: (name) => {
        this.state.files.push({
          name,
          code: '',
        });
        this.state.active = this.state.files.length - 1;
        this.forceUpdate();
      },
      handleFileSelect: index => () => {
        this.state.active = index;
        this.forceUpdate();
      },
      handleFileDelete: (index) => {
        if (this.state.files.length > 1) {
          this.state.files.splice(index, 1);
          this.state.active = 0;
          this.forceUpdate();
        }
      },
    };
  }
  componentDidMount() {
    const defaultLog = console.log;
    const that = this;
    const componentLog = function componentLog() {
      let args = Array.prototype.slice.call(arguments);
      args = args.join(' ');
      that.state.output = `${that.state.output + args}\n`;
    };
    console.log = function log() {
      componentLog(...arguments);
      defaultLog(...arguments);
    };
    this.setState(getLocal());
  }
  componentDidUpdate() {
    setLocal(this.state);
  }
  render() {
    return (
      <App
        {...this.handles}
        {...this.state}
      />
    );
  }
}

export default Store;
