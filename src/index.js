import React from 'react';
import ReactDOM from 'react-dom';

import  App  from 'App';

import reportWebVitals from './reportWebVitals';
import 'modern-normalize/modern-normalize.css'
import './index.css';

// import data from 'data.json';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
