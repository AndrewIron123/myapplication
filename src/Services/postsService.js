import axios from 'axios';

export const postsService = {
    getPosts,
    getPost,
    createPost
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

function createPost(data = {}) {
    const options = {
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: data
    }
    return axios(options);
}