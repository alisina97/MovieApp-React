import axios from 'axios';

export default axios.create({
    baseURL:'https://movies-backend-8nn4.onrender.com',
    headers: {"ngrok-skip-browser-warning": "true"}
});
