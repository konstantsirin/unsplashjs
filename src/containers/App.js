import React from 'react';

import { Route, withRouter } from 'react-router-dom';

import UnsplashAppContainer from './UnsplashAppContainer/UnsplashAppContainer';
import PhotoDetailContainer from './PhotoDetailContainer/PhotoDetailContainer';

import PreloaderContainer from './PreloaderContainer/PreloaderContainer';

class App extends React.Component {

    render() {

        return (
            <div>
                <PreloaderContainer />

                <Route
                    path='/'
                    component={ UnsplashAppContainer }
                />

                <Route
                    exact
                    path='/:id'
                    render={ (props) => <PhotoDetailContainer photos={props} /> }
                />
            </div>
        )
    }
}

export default withRouter(App);
