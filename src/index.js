
import "@babel/polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
// import App from '../public/contents/App';
import App from '../src/contents/App';
import {HashRouter as Router} from 'react-router-dom';

ReactDOM.render(
    <Router> 
        <App/>
    </Router>,
    document.getElementById('container')
);