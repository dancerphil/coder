/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, setConfig} from 'redux-loadings';
import 'antd/dist/antd.min.css'
import './index.css';
import App from './containers/App';
import './util/polyfill';

setConfig({enableLog:false})

ReactDOM.render(<Provider><App /></Provider>, document.getElementById('root'));
