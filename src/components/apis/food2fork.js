import axios from 'axios';

const proxyURL = 'https://cors-anywhere.herokuapp.com/';

const instance = axios.create({
    baseURL: `${proxyURL}https://www.food2fork.com/api/`,
});

export default instance;