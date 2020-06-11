export const normalizeDate = (date) => {
    let _date = new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return _date.toLocaleDateString('ru-RU', options);
};

export const disableScroll = () => {
    let x = window.scrollX;
    let y = window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
};

export const enableScroll = () => {
    window.onscroll=function(){};
};

const _returnToBackEsc = (ev) => {if(ev.key === 'Escape') {
    returnToBack();
}};

export const returnToBack = () => {
    window.history.back();
    enableScroll();
    window.removeEventListener('keydown', _returnToBackEsc);
};

export const returnToBackWindow = (photoDetailStatus) => {
    if(photoDetailStatus) {
        window.addEventListener('keydown', _returnToBackEsc);
    }
};
