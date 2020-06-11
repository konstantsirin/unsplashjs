import React from 'react';
import Authorization from "../components/Authorization/Authorization";
import UnsplashAppContainer from "../components/UnsplashAppContainer/UnsplashAppContainer";
import PhotoDetailContainer from "../components/PhotoDetailContainer/PhotoDetailContainer";
import {unsplash} from '../API/unsplashApi.js';
import { Route, Redirect, withRouter } from 'react-router-dom';
import Preloader from "../components/Preloader/Preloader";

function App() {
    const code = window.location.search.split('code=')[1];
    if (code) {
            unsplash.auth.userAuthentication(code)
                .then(res => res.json())
                .then(json => {
                    localStorage.setItem('token', json.access_token);
                    unsplash.auth.setBearerToken(json.access_token);
                });
            return (<Redirect to="/unsplashapp" />)
    }
    return (
        <div className="App">
            <Preloader />
            <Route exact path="/">
                <Redirect to="/auth" />
            </Route>
            <Route path="/auth" component={Authorization} />
            <Route path="/unsplashapp" component={UnsplashAppContainer} />
            <Route path="/unsplashapp/:id" render={(props) => <PhotoDetailContainer photos={props} />} />
        </div>
    );
}

export default withRouter(App);
