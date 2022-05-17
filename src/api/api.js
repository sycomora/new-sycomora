import axios from 'axios'
const STRAPI_URL = "http://172.104.160.69:1337"

export default{
    async getAllBlogs() {
        var response = await axios.get(`${STRAPI_URL}/blogs`).catch((err) => console.log(err))
        return response
    },
    async getBlogBySlug(slug) {
        var response = await axios.get(`${STRAPI_URL}/blogs/${slug}`)
        return response
    },
}