import Unsplash from 'unsplash-js';
import {ACCESS_KEY, SECRET, URL} from '../global/constants/constants';

export const unsplash = new Unsplash({
    accessKey: ACCESS_KEY,
    secret: SECRET,
    callbackUrl: URL
});

export const authenticationUrl = unsplash.auth.getAuthenticationUrl([
    "public",
    "write_likes"
]);

export const onAuth = () => {
    window.location.assign(authenticationUrl);

};

