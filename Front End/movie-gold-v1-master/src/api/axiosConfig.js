import axios from 'axios';

export default axios.create({
    baseURL:'https://untalking-theo-flamboyantly.ngrok-free.dev',
    headers: {"ngrok-skip-browser-warning": "true"}
});