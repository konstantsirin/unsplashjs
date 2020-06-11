import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {BrowserRouter} from "react-router-dom";
import store from './redux/store.js';
import {Provider} from "react-redux";
import 'normalize.css';
import './global/styles/globalStyles.css';


ReactDOM.render(
    <React.StrictMode>

            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>

    </React.StrictMode>
    ,
    document.getElementById('root')
);

