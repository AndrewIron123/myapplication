import axios from 'axios';

export const tasksService = {
    getTasks,
    getTask
}

function getTasks(params = {}) {
    const options = {
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/tasks',
        params: params
    }
    return axios(options);
}
function getTask(params = {}, number = 1) {
    const options = {
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/tasks/' + number,
        params: params
    }
    return axios(options);
}