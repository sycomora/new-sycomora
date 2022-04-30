<template>
  <div class="w-screen h-full">
    <div class="w-full flex flex-col lg:grid lg:grid-cols-11 gap-8 py-6 lg:py-12 px-5 lg:px-16 xxl:px-32">
      <div v-show="!isLoading" class="blogs w-full h-full col-span-7 flex flex-col gap-5">
        <div class="w-full h-min flex flex-col">
          <img
            src="@/assets/Main2.png"
            alt="Main Picture"
            class="w-full object-cover rounded-t-xl"
          />
          <div
            class="
              bg-white
              p-5
              lg:p-10
              text-left
              flex flex-col
              gap-1
              lg:gap-3
              text-lg
              rounded-b-2xl
            "
          >
            <div class="w-full flex justify-between font-bold text-sm lg:text-lg">
              <p class="text-secondary">Editor's Choice</p>
              <p class="opacity-70">{{this.blogInfo.minutes}} menit baca</p>
            </div>
            <p class="font-black text-3xl lg:text-5xl">
              {{ this.blogInfo.title }}
            </p>
            <p class="opacity-70 text-sm lg:text-lg">
              Ditulis oleh: {{ this.blogInfo.author }}
            </p>
            <div v-html="first" class="text-sm lg:text-lg">
            </div>
          </div>
        </div>
        <div v-for="writing, index in blogWritings" :key="index" class="w-full h-full flex flex-col">
          <div
            class="
              bg-white
              p-5
              lg:p-10
              text-left
              flex flex-col
              gap-3
              text-sm
              lg:text-lg
              rounded-2xl
            "
          >
            <div v-html="writing">
            </div>
          </div>
        </div>
      </div>
      <div v-show="isLoading" class="w-full h-full col-span-7 flex flex-col gap-5 justify-between items-center">
        <div class="w-full h-full flex flex-col justify-between">
          <div class="w-full h-32 lg:h-96 bg-primary opacity-25 object-cover rounded-t-xl animate-pulse">
          </div>
          <div
            class="
              bg-white
              h-full
              p-5
              lg:p-10
              text-left
              flex flex-col
              gap-3
              text-lg
              rounded-b-2xl
            "
          >
          <div class="rounded-xl w-full h-6 bg-primary opacity-25 animate-pulse">
          </div>
          <div class="rounded-xl w-full h-16 bg-primary opacity-25 animate-pulse">
          </div>
          <div class="flex flex-col h-full w-full pt-4 bg-primary opacity-25 rounded-xl animate-pulse">
          </div>

          </div>
        </div>
      </div>
      <div class="w-full lg:col-span-4 h-full flex flex-col gap-5">
        <div
          class="
            w-full
            h-64
            bg-white
            rounded-xl
            flex
            justify-center
            items-center
          "
        >
          Sycomora-affiliated advertisement
        </div>
        <div
          class="w-full bg-white p-5 rounded-xl text-left flex flex-col gap-6"
        >
          <p class="text-3xl font-bold">Bacaan Untukmu:</p>
          <div v-show="!isLoading" v-for="blog, index in filteredAllBlogs" :key="index">
            <a :href="$router.resolve({name: 'SingleBlog', params: { slug:blog.slug }}).href">
            <p class="text-xl font-black">
              {{ blog.title }}
            </p>
            </a>
            <br />
            <div class="w-full h-1 bg-primary opacity-40"></div>
          </div>
          <div v-show="isLoading">
            <div class="w-full h-12 animate-pulse bg-primary opacity-25 rounded-xl"></div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../api/api.js'
import { marked } from 'marked'

export default {
    data() {
        return {
            slug: this.$route.params.slug,
            filteredAllBlogs: [],
            allBlogs: {},
            blogInfo: {},
            blogWritings: [],
            first: "",
            isLoading: true
        }
    },
    async created() {
        this.allBlogs = await api.getAllBlogs()
        this.allBlogs = this.allBlogs.data
        console.log(this.allBlogs)
        this.blogInfo = await api.getBlogBySlug(this.slug)
        this.blogInfo = this.blogInfo.data
        this.blogWritings = this.blogInfo.tulisan.split("====")
        for(var i = 0; i < this.blogWritings.length; i++) {
          this.blogWritings[i] = this.markdownToHTML(this.blogWritings[i])
        }
        this.first = this.blogWritings[0]
        this.blogWritings = this.blogWritings.slice(1)

        this.filteredAllBlogs = this.allBlogs.filter(blogs => blogs._id != this.id)
        console.log(this.filteredAllBlogs)
        this.isLoading = false 
    },
    setup () {
        

        return {}
    },
    methods: {
      markdownToHTML(md) {
        return marked.parse(md)
      }
    },
}
</script>

<style scope>

.blogs h3{
  font-size: 24px;
  line-height: 1;
}

.blogs p{
  padding: 10px 0px;
}

.blogs iframe{
  margin: 10px 0px;
}
</style>
