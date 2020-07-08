import React from 'react';

import { Route, Redirect, withRouter } from 'react-router-dom';

import UnsplashAppContainer from '../components/UnsplashAppContainer/UnsplashAppContainer';
import PhotoDetailContainer from '../components/PhotoDetailContainer/PhotoDetailContainer';

import Preloader from '../components/Preloader/Preloader';

function App() {

    return (
            <div>
                <Preloader />
                <Route exact path='/'>
                    <Redirect to='/' />
                </Route>
                <Route path='/' component={UnsplashAppContainer} />
                <Route path='/:id' render={(props) => <PhotoDetailContainer photos={props} />} />
            </div>
        );

}

export default withRouter(App);
