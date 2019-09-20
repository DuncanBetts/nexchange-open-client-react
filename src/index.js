import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './i18n';

import Home from 'Components/Home/Home';

import setAuthToken from 'Utils/setAuthToken';
import crispEmailBinding from 'Utils/crispEmailBinding';

import reducers from './reducers';
import './css/index.scss';

window.$ = window.jQuery = require('jquery');
require('./js/bootstrap.min.js');

// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const store = createStoreWithMiddleware(reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(reducers, enhancer);

setAuthToken();
crispEmailBinding(store);
require('Utils/bindGa');

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" render={props => <Home {...props} store={store} />} /> />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
