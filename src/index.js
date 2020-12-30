import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { DataContextProvider } from './context/dataContext';

import './global-styles/normalize.css';
import './global-styles/global.css';

ReactDOM.render(
    <DataContextProvider>
        <App />
    </DataContextProvider>,
    document.getElementById('root')
);
