import axios from 'axios'
const STRAPI_URL = "https://web-strapi.herokuapp.com/"

export default{
    async getAllBlogs() {
        var response = await axios.get(`${STRAPI_URL}/blogs`).catch((err) => console.log(err))
        return response
    },
    async getBlogById(id) {
        var response = await axios.get(`${STRAPI_URL}/blogs/${id}`)
        return response
    }
}