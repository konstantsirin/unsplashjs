import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {BrowserRouter} from "react-router-dom";
import store from './redux/store.js';
import {Provider} from "react-redux";
import 'normalize.css';
import './global/styles/globalStyles.css';
import {CODE} from "./global/constants/constants";
import {unsplash} from "./API/unsplashApi";
import Authorization from "./components/Authorization/Authorization";

let mountingApp = false;

if (CODE) {
    mountingApp = true;
    unsplash.auth.userAuthentication(CODE)
        .then(res => res.json())
        .then(json => {
            localStorage.setItem('token', json.access_token);
            unsplash.auth.setBearerToken(json.access_token);
        });
    window.location.href = `${window.location.origin}/unsplashapp`;
}

ReactDOM.render(
    <React.StrictMode>

        <BrowserRouter>
            <Provider store={store}>
                {mountingApp ? <Authorization /> : <App />}
            </Provider>
        </BrowserRouter>

    </React.StrictMode>,
    document.getElementById('root')
);
