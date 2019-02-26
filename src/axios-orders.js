import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://the-burger-builder-714ff.firebaseio.com/'
});

export default instance;