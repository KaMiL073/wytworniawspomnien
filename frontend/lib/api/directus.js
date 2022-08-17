import axios from 'axios';

export default axios.create({
  baseURL: process.env.BACKEND_URL,
  timeout: 2000,
  headers: {
    Authorization: `Bearer ${process.env.SERVICE_USER_TOKEN}`,
  },
});
