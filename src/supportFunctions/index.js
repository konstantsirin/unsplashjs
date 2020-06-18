const NORMALIZE_DATE = (date) => {
    let _date = new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return _date.toLocaleDateString('ru-RU', options);
};

export const DISABLE_SCROLL = () => {
    let x = window.scrollX;
    let y = window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
};

export const ENABLE_SCROLL = () => {
    window.onscroll=function(){};
};

const RETURN_TO_BACK_ESC = (ev) => {if(ev.key === 'Escape') {
    RETURN_TO_BACK();
}};

export const RETURN_TO_BACK = () => {
    window.history.back();
    ENABLE_SCROLL();
    window.removeEventListener('keydown', RETURN_TO_BACK_ESC);
};

export const RETURN_TO_BACK_WINDOW = (photoDetailStatus) => {
    if(photoDetailStatus) {
        window.addEventListener('keydown', RETURN_TO_BACK_ESC);
    }
};

export const PHOTOS_DATA_NORMALIZE = (photos) => {
    return photos.map(p => {
        return ({
            id: p ? p.id : '',
            createdPhoto: p ? NORMALIZE_DATE(p.created_at) : '',
            isLiked: p ? p.liked_by_user : '',
            likes: p ? p.likes : '0',
            photoImgSmall: p && p.urls ? p.urls.small : '',
            photoImgRegular: p && p.urls ? p.urls.regular : '',
            authorName: p && p.user ? p.user.name : '',
            authorProfileLink: p && p.user && p.user.links ? p.user.links.html : '',
            authorProfileAvatar: p && p.user && p.user.profile_image ? p.user.profile_image.small : ''
            })
    })
}
