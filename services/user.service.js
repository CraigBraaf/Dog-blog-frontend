import axios from "axios";
import authheader from "./auth-header";
const API_URL = "https://d0g-blog.herokuapp.com/posts";
export default { 
    getPublicContent() {
    return axios.get(API_URL, {headers: authheader()});
},
};