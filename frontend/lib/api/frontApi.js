import axios from 'axios';

export async function getBlogArticles(url, page) {
    return axios.post('/api/news', { page }).then((resp) => resp.data);
}