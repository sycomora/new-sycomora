<template>
  <div class="home w-screen h-full">
    <!-- First Section Editor's Choice-->
    <div
      class="
        h-full
        lg:h-screen
        grid grid-cols-5 grid-rows-2
        gap-8
        py-8
        lg:py-16
        mx-5
        lg:mx-12 lg:px-10
        xxl:px-32
      "
    >
      <div
        class="
          relative
          rounded-xl
          object-cover
          col-span-5
          lg:col-span-3
          row-span-2
          h-full
          text-primary
        "
      >
        <div
          class="
            absolute
            bottom-[80px]
            lg:bottom-[195px]
            z-10
            bg-secondary
            h-min
            w-max
            px-5
            py-2
            m-12
            rounded-xl
            text-white text-md
            lg:text-2xl
            flex
            items-center
            justify-center
          "
        >
          Editors' Choice
        </div>
        <div
          class="
            h-32
            lg:h-60
            flex flex-col
            lg:gap-1
            justify-center
            backdrop-opacity-20
            bg-white/100
            rounded-xl
            absolute
            m-3
            lg:m-6
            bottom-0
            p-5
          "
        >
          <p class="text-lg lg:text-5xl font-bold lg:font-black text-left">
            {{ headline.title }}
          </p>
          <p class="text-xs lg:text-xl text-left">
            Cerita tentang keilmiahan dan efektivitas paparan musik klasik pada
            kecerdasan anak.
          </p>
          <div class="flex justify-between items-center lg:items-end">
            <p class="text-xs lg:text-lg text-left opacity-70">
              {{ headline.minutes }} menit baca
            </p>
            <router-link
              :to="{
                name: 'SingleBlog',
                params: { slug:headline.slug },
              }"
            >
              <div
                class="
                  w-5
                  lg:w-10
                  h-5
                  lg:h-10
                  flex
                  items-center
                  justify-center
                  outline outline-2 outline-tersiary
                  text-tersiary
                  rounded-full
                  duration-500
                  ease-in-out
                  transform
                  hover:scale-110
                  cursor-pointer
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </router-link>
          </div>
        </div>
        <img
          src="@/assets/Main.png"
          alt="Main Image"
          class="object-cover w-full h-full rounded-xl"
        />
      </div>
      <div
        class="
          w-full
          col-span-5
          lg:col-span-2
          rounded-xl
          flex flex-col
          text-primary
        "
      >
        <div class="w-full h-1/2 rounded-t-xl">
          <img
            src="@/assets/Main2.png"
            alt=""
            class="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div
          class="
            w-full
            h-full
            rounded-b-xl
            flex flex-col
            p-5
            bg-white
            justify-center
          "
        >
          <p class="text-lg lg:text-3xl font-bold lg:font-black text-left">
            Pilihan makanan untuk kamu yang memiliki PCOS
          </p>
          <div class="flex justify-between items-center">
            <p class="text-xs lg:text-lg lg:font-bold text-left">
              Kamu masih punya banyak sekali pilihan makanan yang lezat dan
              bergizi.
            </p>
            <router-link
              :to="{
                name: 'SingleBlog',
                params: { slug:headline.slug },
              }"
            >
              <div
                class="
                  w-5
                  lg:w-10
                  h-5
                  lg:h-10
                  flex
                  items-center
                  justify-center
                  outline outline-2 outline-tersiary
                  text-tersiary
                  rounded-full
                  duration-500
                  ease-in-out
                  transform
                  hover:scale-110
                  cursor-pointer
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div
        class="
          col-span-5
          lg:col-span-2
          bg-white
          rounded-xl
          flex flex-col
          justify-center
          xl:justify-between
          gap-2
          p-5
          border-1 border-black
        "
      >
        <p class="text-lg lg:text-3xl font-bold lg:font-black text-left">
          Hubunganmu bermasalah? Bisa jadi akibat beda jenis attachment.
        </p>
        <p class="text-md lg:text-xl lg:font-bold text-left">
          Perbedaan ini sering kali menjadi sumber pertengkaran pasangan. Kenali
          lebih dalam apa jenis attachment-mu melalui tes ini dan pahami
          solusinya.
        </p>
        <p class="text-md lg:text-xl font-bold text-left opacity-70">
          MomoFinder | 2 menit telusur
        </p>
      </div>
    </div>
    <!-- Second Section Second Highlight-->
    <div
      class="
        h-full
        lg:h-90
        w-screen
        bg-tersiary
        flex flex-col
        items-center
        justify-between
        lg:relative lg:p-10
      "
    >
      <div
        class="
          w-max
          lg:h-min lg:absolute
          top-1
          left-16
          rounded-b-xl
          lg:ml-5
          p-5
          lg:pt-10
          text-white text-lg
          lg:text-4xl
          bg-primary
          font-bold
        "
      >
        Telusuri Berdasarkan Topik :
      </div>
      <div
        class="
          w-full
          h-min
          flex flex-row
          gap-8
          items-center
          justify-center
          lg:justify-end
          text-tersiary
          px-10
        "
      >
        <div class="flex flex-col items-center justify-center pt-3 lg:pt-0">
          <div class="relative h-full flex items-center justify-center">
            <input
              type="text"
              class="px-3 py-4 bg-white rounded-xl text-xl w-80 lg:w-96 h-10"
            />
            <span
              class="
                z-10
                h-full
                font-normal
                absolute
                text-center
                bg-transparent
                rounded
                text-xl
                flex
                items-center
                justify-center
                w-8
                right-0
                pr-3
                py-3
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>

        <button
          class="
            bg-white
            hidden
            lg:block
            h-full
            w-max
            p-2
            px-4
            rounded-xl
            font-bold
            text-xl
          "
        >
          Lihat semua topik >
        </button>
      </div>
      <div
        class="
          w-full
          grid grid-cols-2
          content-center
          lg:grid-cols-6
          gap-2
          lg:gap-0
          text-white text-lg
          lg:text-2xl
          my-8
        "
      >
        <div class="flex flex-col items-center justify-center">
          <router-link to="/penyakitkronis">
            <img
              src="@\assets\Topic1.png"
              alt="Penyakit Kronis"
              class="w-40 lg:w-56 h-40 lg:h-56"
            />
            <p>Penyakit Kronis</p>
          </router-link>
        </div>
        <div class="flex flex-col items-center justify-center">
          <router-link to="/penyakitkronis">
            <img
              src="@\assets\Topic2.png"
              alt="Penyakit Kronis"
              class="w-40 lg:w-56 h-40 lg:h-56"
            />
            <p>Nutrisi & Gizi</p>
          </router-link>
        </div>
        <div class="flex flex-col items-center justify-center">
          <router-link to="/penyakitkronis">
            <img
              src="@\assets\Topic3.png"
              alt="Penyakit Kronis"
              class="w-40 lg:w-56 h-40 lg:h-56"
            />
            <p>Kesehatan Mental</p>
          </router-link>
        </div>
        <div class="flex flex-col items-center justify-center">
          <router-link to="/penyakitkronis">
            <img
              src="@\assets\Topic4.png"
              alt="Penyakit Kronis"
              class="w-40 lg:w-56 h-40 lg:h-56"
            />
            <p>Kebugaran</p>
          </router-link>
        </div>
        <div class="flex flex-col items-center justify-center">
          <router-link to="/penyakitkronis">
            <img
              src="@\assets\Topic5.png"
              alt="Penyakit Kronis"
              class="w-40 lg:w-56 h-40 lg:h-56"
            />
            <p>Kulit & Rambut</p>
          </router-link>
        </div>
        <div class="flex flex-col items-center justify-center">
          <router-link to="/penyakitkronis">
            <img
              src="@\assets\Topic5.png"
              alt="Penyakit Kronis"
              class="w-40 lg:w-56 h-40 lg:h-56"
            />
            <p>Profesi Kesehatan</p>
          </router-link>
        </div>
      </div>
      <button
        class="
          bg-white
          block
          lg:hidden
          h-full
          w-max
          p-2
          px-4
          rounded-xl
          font-bold
          text-lg
          lg:text-xl
          mb-10
        "
      >
        Lihat semua topik >
      </button>
    </div>
    <!-- Third Section --> <!--Artikel-->
    <div class="h-full w-screen my-6 lg:my-14 px-5 lg:px-24 xl:px-32">
      <div class="flex justify-between items-end w-full">
        <p class="text-2xl lg:text-4xl font-bold">Artikel Terbaru Kami:</p>
        <a href="" class="text-lg text-tersiary hover:underline hidden lg:block"
          >Lihat semua ></a
        >
      </div>
      <div
        class="
          grid grid-cols-2 grid-rows-2
          gap-x-6 gap-y-8
          w-full
          h-1/2
          mt-2
          lg:mt-8
          content-center
          justify-items-center
        "
      > 
        <router-link
          :to="{name: 'SingleBlog', params: { slug:blog.slug }}"
          v-for="(blog, index) in allBlogs.slice(0, 4)"
          :key="index"
          class="
            w-full
            h-full
            bg-white
            rounded-xl
            text-primary
            flex flex-col
            lg:grid lg:grid-cols-3
            gap-3
            content-center
            p-3
            lg:p-5
          "
        >
          <div class="rounded-xl w-full h-full object-center ">
            <img
              src="@/assets/Main.png"
              alt=""
              class="object-cover w-full h-full rounded-xl"
            />
          </div>
          <div
            class="
              col-span-2
              text-left
              flex flex-col
              justify-between
              gap-3
              lg:gap-0
            "
          >
            <p class="text-sm lg:text-2xl font-bold">
              {{blog.title}}
            </p>
            <p class="text-xs lg:text-lg line-clamp-2 ">
              {{blog.subtitle}}
              <!-- Subjudul ditulis di sini maksimal 2 baris seperti ini contohnya. -->
            </p>
            <p class="opacity-70 hidden lg:block">{{blog.minutes}} menit baca</p>
          </div>

        </router-link>
      </div>
      <div class="lg:hidden mt-3 h-12 w-full flex items-center justify-center">
        <button
          class="
            bg-tersiary
            block
            lg:hidden
            h-full
            w-full
            p-2
            px-4
            rounded-xl
            font-bold
            text-lg
            text-white
          "
        >
          Lihat semua topik >
        </button>
      </div>
    </div>
    <!-- Fourth Section --> <!--Vitae-->
    <div class="h-full w-screen my-6 lg:my-14 px-5 lg:px-24 xl:px-32">
      <div class="lg:grid lg:grid-cols-2 flex flex-col">
        <img
          src="@/assets/Vitae.svg"
          alt="Vitae by Sycomora"
          class="rounded rounded-t-xl lg:rounded-l-xl w-full"
        />
        <div
          class="
            w-full
            flex flex-col
            gap-2
            lg:gap-5
            items-start
            justify-center
            p-4
            lg:p-8
            text-xl
            font-semibold
            text-left
            bg-white
            rounded-b-xl
            lg:rounded-r-xl
          "
        >
          <p class="text-tersiary text-lg lg:text-2xl">Vitae by Sycomora</p>
          <p class="text-2xl lg:text-5xl font-bold lg:font-black">
            Dengarkan cerita dan pengalaman langsung dari orangnya.
          </p>
          <p class="text-primary text-sm lg:text-xl font-normal">
            Podcast Vitae menyuguhkan wawasan dari sudut pandang yang jarang
            atau belum pernah diungkit, bersama narasumber yang berpengalaman di
            bidangnya langsung.
          </p>
          <p class="text-primary text-sm lg:text-xl font-normal">
            Kamu bisa dengarkan Podcast Vitae by Sycomora hanya di Spotify.
            Unduh aplikasinya sekarang dan klik
            <a href="" class="text-tersiary hover:underline">di sini</a> untuk
            langsung mendengarkan.
          </p>
        </div>
      </div>
    </div>
    <!-- Fifth Section, Ending-->
    <div class="h-full w-screen my-6 lg:my-16 px-5 lg:px-24 xl:px-32">
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 relative w-full">
        <div
          class="
            w-full
            flex flex-col
            gap-2
            lg:gap-5
            items-start
            justify-center
            p-4
            lg:p-8
            text-xl
            font-semibold
            text-left
            bg-white
            rounded-b-xl
            lg:rounded-l-xl
          "
        >
          <p class="text-3xl lg:text-3xl font-bold lg:font-black">
            Menyajikan informasi kesehatan yang akurat dan sederhana.
          </p>
          <p class="text-primary text-sm lg:text-xl font-normal">
            Sycomora memasang standar penyajian konten yang sangat tinggi dan
            menjunjung tinggi akuntabilitas, transparansi, objektivitas, serta
            terhindar dari conflict of interest.
          </p>
          <p class="text-primary text-sm lg:text-xl font-normal">
            Setiap unggahan telah melalui proses review yang ketat dan selalu
            diperbarui setiap saat.
          </p>
            <p class="text-primary text-sm lg:text-xl font-normal">
            Produk-produk yang Sycomora ulas selalu berdasarkan objektivitas dan
            atas dasar memberikan manfaat bagi masyarakat luas.
          </p>
          <b-button 
          class="bg-tersiary block lg:hidden h-full w-full p-2 px-4-rounded-xl font-bold text-lg"
          href="https://instagram.com/mzmznasipadang">Lihat Semua</b-button>
        </div>
        <img
          src="@/assets/Pahami.svg"
          alt="Pahami Cara Kerja Kami"
          class="rounded rounded-t-xl lg:rounded-r-xl h-full w-screen"
        />
        
        <div class="absolute bottom-10"></div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../api/api.js'

export default {
  name: "HomePage",
  data() {
    return {
      headline: "",
      allBlogs: [],
    };
  },
  methods: {},
  async created() {
    this.allBlogs = await api.getAllBlogs()
    this.allBlogs = this.allBlogs.data
    console.log(this.allBlogs)
    this.headline = this.allBlogs[0]
  },
};
</script>

<style>
</style>
