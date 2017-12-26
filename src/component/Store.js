import React, { Component } from 'react';
import App from './App';
import defaultState from '../util/defaultState';
import { getLocal, setLocal } from '../util/local';

class Store extends Component {
  constructor() {
    super();
    this.state = defaultState;
    this.handleClick = () => {
      this.state.output = '';
      const { files, active } = this.state;
      const { code } = files[active];
      try {
        eval(code);
      } catch (e) {
        console.log(e);
      }
      this.forceUpdate();
    };
    this.handleTextChange = (value) => {
      const { active, files } = this.state;
      files[active].code = value;
      this.forceUpdate();
    };
    this.handleMouseDown = (e) => {
      if (e.target.id === 'resize') {
        this.preY = e.clientY;
        this.state.consoleState.mouseDown = true;
      }
    };
    this.handleMouseMove = (e) => {
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
    };
    this.handleMouseUp = () => {
      const { consoleState } = this.state;
      consoleState.mouseDown = false;
      this.forceUpdate();
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
        handleTextChange={this.handleTextChange}
        handleClick={this.handleClick}
        handleMouseDown={this.handleMouseDown}
        handleMouseMove={this.handleMouseMove}
        handleMouseUp={this.handleMouseUp}
        {...this.state}
      />
    );
  }
}

export default Store;
