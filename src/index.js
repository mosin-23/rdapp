import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './slices/accountSlice'
import bonusReducer from './slices/bonusSlice'
import { Provider } from 'react-redux';
const store=configureStore(
    {
        reducer:{
            account:accountReducer,
            bonus:bonusReducer
        }
    }
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

