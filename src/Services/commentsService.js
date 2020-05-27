import axios from 'axios';

export const commentsService = {
    getComments,
    getComment,
    createComment
}

function getComments(params = {}) {
    const options = {
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/comments',
        params: params
    }
    return axios(options);
}
function getComment(params = {}, number = 1) {
    const options = {
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/comments/' + number,
        params: params
    }
    return axios(options);
}
function createComment(data = {}, postNumber = 1) {
    const options = {
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/posts/' + postNumber + '/comments',
        data: data
    }
    return axios(options);
}

