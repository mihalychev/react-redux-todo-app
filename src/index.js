import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.scss';
import App from './App';

import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

const app = 
  (
    <Provider store={store}>
      <App/>
    </Provider>
  )

ReactDOM.render(app, document.getElementById('root'));
