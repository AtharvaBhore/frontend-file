import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {} from 'react-redux'
import { createStore ,compose,applyMiddleware} from 'redux'
import rootReducer from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { thunk } from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const appStore= createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Provider store={appStore}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
);

reportWebVitals();
