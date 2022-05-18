import axios from 'axios'
const STRAPI_URL = "https://api.sycomora.id"

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