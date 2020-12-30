import React from 'react';
import ReactDOM from 'react-dom';

import './global-styles/normalize.css';
import './global-styles/global.css';

import { DataContextProvider } from './context/dataContext';
import App from './App';

ReactDOM.render(
    <DataContextProvider>
        <App />
    </DataContextProvider>,
    document.getElementById('root')
);
