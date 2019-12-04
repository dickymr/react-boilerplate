import React from 'react';
import ReactDOM from 'react-dom';

// COMPONENT & OTHER
import './assets/scss/index.scss';
import Main from './base/Main';

// REDUX
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers';

// SET REDUX STORE
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);
