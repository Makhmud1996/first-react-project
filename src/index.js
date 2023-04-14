import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './Calculator.jsx';
import Age from './Age.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Calculator/>
    <Age/>
  </React.StrictMode>
);


