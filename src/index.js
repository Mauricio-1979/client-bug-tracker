import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from 'react-redux';
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import App from './App';

//Reducers
import authReducer from './controllers/Redux/authSlice';
import bugReducer from './controllers/Redux/bugSlice';
import userReducer from './controllers/Redux/userSlice';

const reducer = combineReducers({
    auth:authReducer,
    bugs:bugReducer,
    user:userReducer,
})

const store = configureStore({
    reducer
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


