import disableScroll from 'disable-scroll';

const normalizeDate = (date) => {
    let _date = new Date(date);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return _date.toLocaleDateString('ru-RU', options);
};

const returnToBackEsc = (ev) => {if(ev.key === 'Escape') {
    returnToBack();
}};

export const returnToBack = () => {
    window.history.back();
    disableScroll.on();
    window.removeEventListener('keydown', returnToBackEsc);
};

export const returnToBackWindow = (photoDetailStatus) => {
    if(photoDetailStatus) {
        window.addEventListener('keydown', returnToBackEsc);
    }
};

export const photosDataNormalize = (photos) => {
    return photos.map(p => {
        return ({
            id: p ? p.id : '',
            createdPhoto: p ? normalizeDate(p.created_at) : '',
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
