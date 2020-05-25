import axios from 'axios';

export const postService = {
    getPosts,
    getPost
}

function getPosts(params = {}) {
    const options = {
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/posts',
        params: params
    }
    return axios(options);
}
function getPost(params = {}, number = 1) {
    const options = {
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/posts/' + number,
        params: params
    }
    return axios(options);
}