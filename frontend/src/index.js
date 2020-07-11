import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { Store } from './store';
console.log(process.env.NODE_ENV);
ReactDOM.render(
    <Provider store={Store}>
        <Router>
            <Route path="/">
                <App />
            </Route>
        </Router>
    </Provider>
  ,
  document.getElementById('root')
);

