import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {BrowserRouter} from "react-router-dom";
import store from './redux/store.js';
import {Provider} from "react-redux";
import 'normalize.css';
import './global/styles/globalStyles.css';
import {unsplash, onAuth} from "./API/unsplashApi";
import {code} from './global/constants/constants.js';
document.addEventListener("DOMContentLoaded", onAuth);


if (code) {
    document.removeEventListener("DOMContentLoaded", onAuth);

    unsplash.auth.userAuthentication(code)
        .then(res => res.json())
        .then(json => {
            localStorage.setItem('token', json.access_token);
            unsplash.auth.setBearerToken(json.access_token);
        });

    ReactDOM.render(
        <React.StrictMode>

            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>

        </React.StrictMode>,
        document.getElementById('root')
    );

}


