import axios from 'axios';

export const albumsService = {
    getAlbums,
    getAlbum
}

function getAlbums(params = {}) {
    const options = {
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/albums',
        params: params
    }
    return axios(options);
}
function getAlbum(params = {}, number = 1) {
    const options = {
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/albums/' + number,
        params: params
    }
    return axios(options);
}