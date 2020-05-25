import axios from 'axios';

export const photosService = {
    getPhotos,
    getPhoto
}

function getPhotos(params = {}) {
    const options = {
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/photos',
        params: params
    }
    return axios(options);
}
function getPhoto(params = {}, number = 1) {
    const options = {
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/photos/' + number,
        params: params
    }
    return axios(options);
}