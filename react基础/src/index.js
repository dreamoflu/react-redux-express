import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

//src文件学习内容
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();



import ReduxStudy from './reduxStudy/index'
//reduxStudy文件学习内容
ReactDOM.render(<ReduxStudy />, document.getElementById('root'));
registerServiceWorker();