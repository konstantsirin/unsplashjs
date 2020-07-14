import React from 'react';

import { Route, withRouter } from 'react-router-dom';

import UnsplashAppContainer from '../components/UnsplashAppContainer/UnsplashAppContainer';
import PhotoDetailContainer from '../components/PhotoDetailContainer/PhotoDetailContainer';

import Preloader from '../components/Preloader/Preloader';

class App extends React.Component {

    render() {
        return (
            <div>
                <Preloader />
                <Route exact path='/' component={UnsplashAppContainer} />
                <Route exact path='/:id' render={(props) => <PhotoDetailContainer photos={props} />} />
            </div>
        )
    }
}

export default withRouter(App);
