import { getResults, set, setConfig } from "redux-loadings";
import { getLocal } from "./local";

setConfig({enableLog:false})

const defaultLog = console.log;
const componentLog = function componentLog() {
  let args = Array.prototype.slice.call(arguments);
  args = args.join(' ');
  const output = getResults('output');
  set('output', `${output + args}\n`);
};
console.log = function log() {
  componentLog(...arguments);
  defaultLog(...arguments);
};
const {
  files = [{ name: 'index.js', code: '' }],
  active = 0,
  output = '',
  consoleHeight = 160,
  mouseDown = false,
} = getLocal() || {};

set('files', files);
set('active', active);
set('output', output);
set('consoleHeight', consoleHeight);
set('mouseDown', mouseDown);
