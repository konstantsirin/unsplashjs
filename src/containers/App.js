import React from 'react';
import Authorization from "../components/Authorization/Authorization";
import UnsplashAppContainer from "../components/UnsplashAppContainer/UnsplashAppContainer";
import PhotoDetailContainer from "../components/PhotoDetailContainer/PhotoDetailContainer";
import { Route, Redirect, withRouter } from 'react-router-dom';
import Preloader from "../components/Preloader/Preloader";

function App() {

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
