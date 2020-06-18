import Unsplash from 'unsplash-js';
import {URL} from '../global/constants/constants';

export const unsplash = new Unsplash({
    accessKey: "DhN9G_bo-rHP6T8JurB-S_-OQvjFCrnszggu9gUs5fo",
    secret: "JdFTk0TyyKE4tZL1viY2zqQcV9iy7MqHwysKlfVdEKs",
    callbackUrl: URL
});

export const authenticationUrl = unsplash.auth.getAuthenticationUrl([
    "public",
    "write_likes"
]);

export const onAuth = () => {
    window.location.assign(authenticationUrl);

};

