import React from 'react';

import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import App from './containers/App';

import 'normalize.css';
import './styles/globalStyles.css';

import store from './redux/store.js';
import {unsplash, authenticationUrl} from './API/unsplashApi';

const code = window.location.search.split('code=')[1];

if (code) {
    unsplash.auth.userAuthentication(code)
        .then(res => res.json())
        .then(json => {
            localStorage.setItem('token', json.access_token);
            unsplash.auth.setBearerToken(json.access_token);
        }).then( window.history.pushState(null, null, '/'));

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

} else {
    window.location.assign(authenticationUrl);
}


