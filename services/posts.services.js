import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'https://d0g-blog.herokuapp.com/posts';
class PostService {
    async create(post) {
        return axios 
        .post(API_URL, {
         title: post.title,
         description: post.description,
         photo:post.photo,
        },
        {headers:authHeader()})
    }
    delete (post) {
        return axios
        .delete(API_URL + post, {headers: authHeader()})
    }
    update(post) {
        return axios.patch(API_URL + post._id, {
            name:post.name,
            description: post.description,
            photo: post.photo,
        },
        {headers: authHeader()})
    }
    };
     export default new PostService();