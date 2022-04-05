<template>
  <div class="w-screen h-full">
    <div class="w-full grid grid-cols-11 gap-8 py-12 px-16 xxl:px-32">
      <div class="blogs w-full h-full col-span-7 flex flex-col gap-5">
        <div class="w-full h-min flex flex-col">
          <img
            src="@/assets/Main2.png"
            alt="Main Picture"
            class="w-full object-cover rounded-t-xl"
          />
          <div
            class="
              bg-white
              p-10
              text-left
              flex flex-col
              gap-3
              text-lg
              rounded-b-2xl
            "
          >
            <div class="w-full flex justify-between font-bold text-lg">
              <p class="text-secondary">Editor's Choice</p>
              <p class="opacity-70">{{this.blogInfo.minutes}} menit baca</p>
            </div>
            <p class="font-black text-5xl">
              {{ this.blogInfo.title }}
            </p>
            <p class="opacity-70">
              Ditulis oleh: {{ this.blogInfo.author }}
            </p>
            <div v-html="first">
            </div>
          </div>
        </div>
        <div  v-for="writing, index in blogWritings" :key="index" class="w-full h-full flex flex-col">
          <div
            class="
              bg-white
              p-10
              text-left
              flex flex-col
              gap-3
              text-lg
              rounded-2xl
            "
          >
            <div v-html="writing">
            </div>
          </div>
        </div>
      </div>
      <div class="w-full col-span-4 h-full flex flex-col gap-5">
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
          <div v-for="x in 6" :key="x">
            <p class="text-xl font-black">
              Judul artikel ditulis di sini maksimal 2 baris seperti ini
              contohnya.
            </p>
            <br />
            <div class="w-full h-1 bg-primary opacity-40"></div>
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
            // id: this.$route.params.id,
            id: "623f048ce73cbd00165064d8",
            allBlogs: {},
            blogInfo: {},
            blogWritings: [],
            first: "",
            test: {"_id":"623f048ce73cbd00165064d8","tulisan":"Setiap calon Ibu tentu ingin memiliki anak yang unggul. Berbagai macam cara ditempuh oleh orang tua agar tumbuh kembang anak menjadi optimal, salah satunya adalah dengan memaparkan musik klasik saat usia kehamilan.\n\nSuatu penelitian pada tahun 1993 menyatakan bahwa mendengarkan musik Mozart (khususnya Piano Sonata for Two Pianos: K448) berdampak positif terhadap performa saat mengerjakan suatu bagian tes IQ sehingga hasilnya lebih tinggi. [1] Hal ini kemudian diamini dan diinterpretasikan secara berlebihan oleh dunia komersil.\n\nPada pertengahan 1990-an, terjadi booming penjualan kaset kompilasi musik klasik dan laku keras karena kampanye marketing “Musik Mozart membuat anak cerdas”. Hal ini pun saat ini masih menjadi suatu komoditas, khususnya bagi para calon orang tua.\n\nPada artikel Editors’ Choice kali ini, Sycomora ingin mengupas tuntas mitos-fakta serta manfaat konkret dari paparan musik klasik untuk janin dan dampaknya terhadap tumbuh kembang anak di masa depan.\n====\n### **Sang Janin Mendengar Suara Kita**\n\nMerupakan suatu fakta bahwa saat dalam kandungan, seorang calon anak dapat mendengar suara dari luar rahim Ibu yang begitu nyaman baginya.\n\nPada usia kehamilan antara 24-35 minggu, janin mengalami perkembangan dan penyempurnaan sistem pendengaran, mulai dari frekuensi suara rendah, hingga semakin tinggi. [2,9]\n\nTentunya, suara yang didengar janin juga dapat diproses dengan baik, dan dapat berdampak pada perkembangan sistem saraf janin, termasuk otak. [9] Hal ini kemudian yang menjadi hipotesis bahwa dengan memberikan sensor yang tepat, perkembangan janin bisa dioptimalkan, bahkan berdampak pada jangka panjang hingga usia dewasa dan lanjut.\n====\n### **Tidak Menjadikan Anak Cerdas**\n\nSebuah meta-analisis terhadap 16 penelitian menemukan bahwa pemutaran musik klasik (tidak hanya Mozart) berdampak pada peningkatan kecerdasan anak dalam waktu singkat (temporer). Namun, tidak ditemukan adanya peningkatan kecerdasan permanen dalam jangka panjang. [4]\n\nMelalui penemuan ini, dapat disimpulkan bahwa kecerdasan anak bisa disentil (brain arousal) dengan paparan musik klasik sebelum belajar atau ujian. Namun, hal ini tidak berdampak signifikan untuk tingkat kecerdasan di masa depan mereka.\n\nBrain arousal juga bisa dilakukan menggunakan media lain; tidak hanya musik, efek yang sama juga dapat dirasakan dari olahraga dan secangkir kopi. [5]\n====\n### **Anak Menjadi Lebih Adaptif**\n\nPenelitian menunjukkan bahwa, paparan suara dapat berdampak terhadap neural plasticity bayi. [6] Neural plasticity adalah kemampuan otak untuk mengubah susunan sel neuron. Seiring bertambahnya usia, neural plasticity terus berkurang. Istilah ini sering disederhanakan sebagai “otak encer”, dan menjadi alasan mengapa usia dini sangat mudah beradaptasi dengan hal baru.\n\nPaparan musik klasik saat kehamilan dapat meningkatkan ketahanan neural plasticity pada bayi dan anak-anak. Efeknya terasa hingga 4 bulan pasca kelahiran. [7] Lalu, apakah ini berdampak pada kecerdasan anak? Tidak. Neural plasticity tidak menjamin kecerdasan anak secara keseluruhan.\n\nDisimpulkan pada penelitian ini bahwa suara apa pun (tidak hanya musik klasik) dapat memengaruhi neural plasticity janin. Suara berisik dan keras dapat memberikan efek berlawanan, dan dapat merusak perkembangan otak bayi jika terpapar dalam jangka waktu lama. [6,7]\n====\n### **Dampak Lain yang Tidak Disangka**\n\nBeragam penelitian yang membahas mengenai Mozart Effect ini justru menemukan efek lain yang tidak disangka juga bermanfaat tidak hanya untuk janin dan bayi, tetapi masyarakat secara luas. Berikut beberapa temuan yang dapat disimpulkan:\n\nIbu hamil menjadi lebih tenang\nPaparan musik klasik dapat mengurangi episode kecemasan pada masa kehamilan. [8]\n\nMusik klasik dapat meredakan episode epilepsi\nFluktuasi gelombang otak pada epilepsi dapat diredakan secara signifikan berdasarkan pengamatan menggunakan EEG (electroencephalography). [3]\n\nKondisi bayi pasca-kelahiran lebih stabil\nPemutaran musik klasik juga dapat berdampak pada bayi yang baru lahir agar menjadi lebih tenang, rileks, serta komplikasi pasca-kelahiran pada bayi lebih sedikit. [9]\n","published_at":"2022-03-26T12:18:26.885Z","createdAt":"2022-03-26T12:18:20.342Z","updatedAt":"2022-04-04T13:48:08.220Z","__v":0,"author":"Jason","instagram":"instagram.com","minutes":5,"title":"Putar Mozart: apa bisa bikin anak pintar?","id":"623f048ce73cbd00165064d8"}
        }
    },
    async created() {
        this.allBlogs = await api.getAllBlogs()
        this.blogInfo = await api.getBlogById(this.id)
        this.blogInfo = this.blogInfo.data
        this.blogWritings = this.blogInfo.tulisan.split("====")
        for(var i = 0; i < this.blogWritings.length; i++) {
          this.blogWritings[i] = this.markdownToHTML(this.blogWritings[i])
        }
        this.first = this.blogWritings[0]
        this.blogWritings = this.blogWritings.slice(1)
        console.log(this.blogWritings)
    },
    setup () {
        

        return {}
    },
    methods: {
      markdownToHTML(md) {
        console.log(marked.parse(md))
        return marked.parse(md)
      }
    },
}
</script>

<style scope>

.blogs h3{
  font-size: 32px;
}

.blogs p{
  padding: 10px 0px;
}
</style>
