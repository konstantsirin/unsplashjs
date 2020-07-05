const normalize_date = (date) => {
    let _date = new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return _date.toLocaleDateString('ru-RU', options);
};

export const disable_scroll = () => {
    let x = window.scrollX;
    let y = window.scrollY;
    window.onscroll = function(){window.scrollTo(x, y);};
};

export const enable_scroll = () => {
    window.onscroll = function(){};
};

const return_to_back_esc = (ev) => {if(ev.key === 'Escape') {
    return_to_back();
}};

export const return_to_back = () => {
    window.history.back();
    enable_scroll();
    window.removeEventListener('keydown', return_to_back_esc);
};

export const return_to_back_window = (photoDetailStatus) => {
    if(photoDetailStatus) {
        window.addEventListener('keydown', return_to_back_esc);
    }
};

export const photos_data_normalize = (photos) => {
    return photos.map(p => {
        return ({
            id: p ? p.id : '',
            createdPhoto: p ? normalize_date(p.created_at) : '',
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
