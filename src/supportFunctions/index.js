export const normalizeDate = (date) => {
    let _date = new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    //const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return _date.toLocaleDateString('ru-RU', options);
};

