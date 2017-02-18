import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('root');
//Case 1
ReactDOM.render(<App />, rootElement);
//Case 2
// ReactDOM.render(<App headerTitle = "Welcome"
//                       contentTitle = "Stranger"
//                       contentBody = "Welcome to example app"/>, rootElement);
