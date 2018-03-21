import React from 'react';
import ReactDom from 'react-dom';
import { BrowserHistory } from 'react-router-dom';
import App from './App';

ReactDom.render(
  <BrowserHistory>
    <App />
  </BrowserHistory>
, document.getElementById('app'));
