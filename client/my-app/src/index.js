import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './backup_App';
// import MyComponent from './App';
// import App from './backup_App';
import reportWebVitals from './reportWebVitals';
// import Apptest from './test';
// import App from './assets/one';
import Game from './assets/game';
import App from './App';
// import App from './assets/snake';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <MyComponent/> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
