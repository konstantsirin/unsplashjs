export const QUANTITY_REQUIRED_PHOTO = 10;
export const ACCESS_KEY = 'DhN9G_bo-rHP6T8JurB-S_-OQvjFCrnszggu9gUs5fo';
export const SECRET = 'JdFTk0TyyKE4tZL1viY2zqQcV9iy7MqHwysKlfVdEKs';

export const URL = ( typeof process.env.NODE_ENV !==  'undefined' ) ? 'http://localhost:3000/' : 'http://web-dev-page.ru/';

export const PERMISSIONS = [
    'public',
    'write_likes'
];

export const INITIAL_STATE = {
    photos: {
        dataPhoto : [],
        currentPage: 1
    },
    status: {
        isFetching : false,
        photoDetailStatus : false
    }
};
