import axios from 'axios';
 
export const main = axios.create({
    baseURL: 'http://localhost:3001/'
});

