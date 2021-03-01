import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CounterReact from "./components/counter/react-state/counter-react";
import CounterRedux from "./components/counter/redux-state/counter-redux";




ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <App/>,
  //   <CounterRedux/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
