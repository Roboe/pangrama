import React from 'react';
import ReactDOM from 'react-dom';
import App from './ui/App';
import './main.css';
import registerServiceWorker from './infrastructure/registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
