import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { Provider } from 'react-redux';

import App from './components/App';
import rootReducer from './reducers';

import 'bootstrap/dist/css/bootstrap.min.css'; 

const store = createStore(rootReducer, {}, applyMiddleware());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById("root")
);