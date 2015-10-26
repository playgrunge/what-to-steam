import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './containers/App';
import MainReducer from './reducers/MainReducer';
import promiseMiddleware from 'redux-promise';


const createStoreWithMiddleware = applyMiddleware(
	promiseMiddleware
)(createStore);

const store = createStoreWithMiddleware(MainReducer);


const rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
