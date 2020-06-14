import axios from 'axios';

const apiUrl = 'https://api.github.com';

const instance = axios.create({
    baseURL: apiUrl
})
export default instance;