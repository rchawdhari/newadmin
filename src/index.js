import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';
import c from './components/common/styles/common.css';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers';
import  { Provider } from 'react-redux';
require('../node_modules/bootstrap/dist/css/bootstrap.min.css')
require('../src/components/common/styles/common.css')

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;
const createStoreWithMiddleware = composeEnhancers(applyMiddleware(thunk))(createStore);
 const store =createStoreWithMiddleware(allReducers)

ReactDOM.render(
   <Provider store={store}>
    <Routes />
   </Provider>
  ,document.getElementById('app'));
