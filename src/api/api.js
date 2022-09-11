import axios from 'axios'
const STRAPI_URL = "https://api.sycomora.id"
//current api domain

export default{
    async getAllBlogs() {
        var response = await axios.get(`${STRAPI_URL}/blogs?_sort=createdAt:DESC`).catch((err) => console.log(err))
        return response
    },
    async getBlogBySlug(slug) {
        var response = await axios.get(`${STRAPI_URL}/blogs/${slug}`)
        return response
    },
}