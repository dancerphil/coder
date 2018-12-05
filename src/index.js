/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'redux-loadings';
import 'antd/dist/antd.min.css'
import './index.css';
import './util/polyfill';
import App from './containers/App';

ReactDOM.render(<Provider><App /></Provider>, document.getElementById('root'));
