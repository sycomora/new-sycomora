<template>
  <div class="w-screen h-full">
    <div class="w-full flex flex-col lg:grid lg:grid-cols-11 gap-8 py-6 lg:py-12 px-5 lg:px-16 xxl:px-32">
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
        <div  v-for="writing, index in blogWritings" :key="index" class="w-full h-full flex flex-col">
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
          <div v-for="blog, index in filteredAllBlogs" :key="index">
            <p class="text-xl font-black">
              {{ blog.title }}
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
            filteredAllBlogs: [],
            allBlogs: {},
            blogInfo: {},
            blogWritings: [],
            first: "",
            test: {"_id":"623f048ce73cbd00165064d8","tulisan":"Setiap calon Ibu tentu ingin memiliki anak yang unggul. Berbagai macam cara ditempuh oleh orang tua agar tumbuh kembang anak menjadi optimal, salah satunya adalah dengan memaparkan musik klasik saat usia kehamilan.\n\nSuatu penelitian pada tahun 1993 menyatakan bahwa mendengarkan musik Mozart (khususnya Piano Sonata for Two Pianos: K448) berdampak positif terhadap performa saat mengerjakan suatu bagian tes IQ sehingga hasilnya lebih tinggi. [1] Hal ini kemudian diamini dan diinterpretasikan secara berlebihan oleh dunia komersil.\n\nPada pertengahan 1990-an, terjadi booming penjualan kaset kompilasi musik klasik dan laku keras karena kampanye marketing “Musik Mozart membuat anak cerdas”. Hal ini pun saat ini masih menjadi suatu komoditas, khususnya bagi para calon orang tua.\n\nPada artikel Editors’ Choice kali ini, Sycomora ingin mengupas tuntas mitos-fakta serta manfaat konkret dari paparan musik klasik untuk janin dan dampaknya terhadap tumbuh kembang anak di masa depan.\n====\n### **Sang Janin Mendengar Suara Kita**\n\nMerupakan suatu fakta bahwa saat dalam kandungan, seorang calon anak dapat mendengar suara dari luar rahim Ibu yang begitu nyaman baginya.\n\nPada usia kehamilan antara 24-35 minggu, janin mengalami perkembangan dan penyempurnaan sistem pendengaran, mulai dari frekuensi suara rendah, hingga semakin tinggi. [2,9]\n\nTentunya, suara yang didengar janin juga dapat diproses dengan baik, dan dapat berdampak pada perkembangan sistem saraf janin, termasuk otak. [9] Hal ini kemudian yang menjadi hipotesis bahwa dengan memberikan sensor yang tepat, perkembangan janin bisa dioptimalkan, bahkan berdampak pada jangka panjang hingga usia dewasa dan lanjut.\n====\n### **Tidak Menjadikan Anak Cerdas**\n\nSebuah meta-analisis terhadap 16 penelitian menemukan bahwa pemutaran musik klasik (tidak hanya Mozart) berdampak pada peningkatan kecerdasan anak dalam waktu singkat (temporer). Namun, tidak ditemukan adanya peningkatan kecerdasan permanen dalam jangka panjang. [4]\n\nMelalui penemuan ini, dapat disimpulkan bahwa kecerdasan anak bisa disentil (brain arousal) dengan paparan musik klasik sebelum belajar atau ujian. Namun, hal ini tidak berdampak signifikan untuk tingkat kecerdasan di masa depan mereka.\n\nBrain arousal juga bisa dilakukan menggunakan media lain; tidak hanya musik, efek yang sama juga dapat dirasakan dari olahraga dan secangkir kopi. [5]\n====\n### **Anak Menjadi Lebih Adaptif**\n\nPenelitian menunjukkan bahwa, paparan suara dapat berdampak terhadap neural plasticity bayi. [6] Neural plasticity adalah kemampuan otak untuk mengubah susunan sel neuron. Seiring bertambahnya usia, neural plasticity terus berkurang. Istilah ini sering disederhanakan sebagai “otak encer”, dan menjadi alasan mengapa usia dini sangat mudah beradaptasi dengan hal baru.\n\nPaparan musik klasik saat kehamilan dapat meningkatkan ketahanan neural plasticity pada bayi dan anak-anak. Efeknya terasa hingga 4 bulan pasca kelahiran. [7] Lalu, apakah ini berdampak pada kecerdasan anak? Tidak. Neural plasticity tidak menjamin kecerdasan anak secara keseluruhan.\n\nDisimpulkan pada penelitian ini bahwa suara apa pun (tidak hanya musik klasik) dapat memengaruhi neural plasticity janin. Suara berisik dan keras dapat memberikan efek berlawanan, dan dapat merusak perkembangan otak bayi jika terpapar dalam jangka waktu lama. [6,7]\n====\n### **Dampak Lain yang Tidak Disangka**\n\nBeragam penelitian yang membahas mengenai Mozart Effect ini justru menemukan efek lain yang tidak disangka juga bermanfaat tidak hanya untuk janin dan bayi, tetapi masyarakat secara luas. Berikut beberapa temuan yang dapat disimpulkan:\n\nIbu hamil menjadi lebih tenang\nPaparan musik klasik dapat mengurangi episode kecemasan pada masa kehamilan. [8]\n\nMusik klasik dapat meredakan episode epilepsi\nFluktuasi gelombang otak pada epilepsi dapat diredakan secara signifikan berdasarkan pengamatan menggunakan EEG (electroencephalography). [3]\n\nKondisi bayi pasca-kelahiran lebih stabil\nPemutaran musik klasik juga dapat berdampak pada bayi yang baru lahir agar menjadi lebih tenang, rileks, serta komplikasi pasca-kelahiran pada bayi lebih sedikit. [9]\n","published_at":"2022-03-26T12:18:26.885Z","createdAt":"2022-03-26T12:18:20.342Z","updatedAt":"2022-04-04T13:48:08.220Z","__v":0,"author":"Jason","instagram":"instagram.com","minutes":5,"title":"Putar Mozart: apa bisa bikin anak pintar?","id":"623f048ce73cbd00165064d8"},
            testAllBlogs: [{"_id":"623f048ce73cbd00165064d8","tulisan":"Setiap calon Ibu tentu ingin memiliki anak yang unggul. Berbagai macam cara ditempuh oleh orang tua agar tumbuh kembang anak menjadi optimal, salah satunya adalah dengan memaparkan musik klasik saat usia kehamilan.\n\n\nSuatu penelitian pada tahun 1993 menyatakan bahwa mendengarkan musik Mozart (khususnya Piano Sonata for Two Pianos: K448) berdampak positif terhadap performa saat mengerjakan suatu bagian tes IQ sehingga hasilnya lebih tinggi. [1] Hal ini kemudian diamini dan diinterpretasikan secara berlebihan oleh dunia komersil.\n\n\nPada pertengahan 1990-an, terjadi booming penjualan kaset kompilasi musik klasik dan laku keras karena kampanye marketing “Musik Mozart membuat anak cerdas”. Hal ini pun saat ini masih menjadi suatu komoditas, khususnya bagi para calon orang tua.\n\n\nPada artikel Editors’ Choice kali ini, Sycomora ingin mengupas tuntas mitos-fakta serta manfaat konkret dari paparan musik klasik untuk janin dan dampaknya terhadap tumbuh kembang anak di masa depan.\n\n\n====\n### **Sang Janin Mendengar Suara Kita**\n\n<iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/track/2hHeGD57S0BcopfVcmehdl?utm_source=generator\" width=\"100%\" height=\"80\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>\n\nMerupakan suatu fakta bahwa saat dalam kandungan, seorang calon anak dapat mendengar suara dari luar rahim Ibu yang begitu nyaman baginya.\n\nPada usia kehamilan antara 24-35 minggu, janin mengalami perkembangan dan penyempurnaan sistem pendengaran, mulai dari frekuensi suara rendah, hingga semakin tinggi. [2,9]\n\nTentunya, suara yang didengar janin juga dapat diproses dengan baik, dan dapat berdampak pada perkembangan sistem saraf janin, termasuk otak. [9] Hal ini kemudian yang menjadi hipotesis bahwa dengan memberikan sensor yang tepat, perkembangan janin bisa dioptimalkan, bahkan berdampak pada jangka panjang hingga usia dewasa dan lanjut.\n====\n### **Tidak Menjadikan Anak Cerdas**\n\nSebuah meta-analisis terhadap 16 penelitian menemukan bahwa pemutaran musik klasik (tidak hanya Mozart) berdampak pada peningkatan kecerdasan anak dalam waktu singkat (temporer). Namun, tidak ditemukan adanya peningkatan kecerdasan permanen dalam jangka panjang. [4]\n\nMelalui penemuan ini, dapat disimpulkan bahwa kecerdasan anak bisa disentil (brain arousal) dengan paparan musik klasik sebelum belajar atau ujian. Namun, hal ini tidak berdampak signifikan untuk tingkat kecerdasan di masa depan mereka.\n\nBrain arousal juga bisa dilakukan menggunakan media lain; tidak hanya musik, efek yang sama juga dapat dirasakan dari olahraga dan secangkir kopi. [5]\n====\n### **Anak Menjadi Lebih Adaptif**\n\nPenelitian menunjukkan bahwa, paparan suara dapat berdampak terhadap neural plasticity bayi. [6] Neural plasticity adalah kemampuan otak untuk mengubah susunan sel neuron. Seiring bertambahnya usia, neural plasticity terus berkurang. Istilah ini sering disederhanakan sebagai “otak encer”, dan menjadi alasan mengapa usia dini sangat mudah beradaptasi dengan hal baru.\n\nPaparan musik klasik saat kehamilan dapat meningkatkan ketahanan neural plasticity pada bayi dan anak-anak. Efeknya terasa hingga 4 bulan pasca kelahiran. [7] Lalu, apakah ini berdampak pada kecerdasan anak? Tidak. Neural plasticity tidak menjamin kecerdasan anak secara keseluruhan.\n\nDisimpulkan pada penelitian ini bahwa suara apa pun (tidak hanya musik klasik) dapat memengaruhi neural plasticity janin. Suara berisik dan keras dapat memberikan efek berlawanan, dan dapat merusak perkembangan otak bayi jika terpapar dalam jangka waktu lama. [6,7]\n====\n### **Dampak Lain yang Tidak Disangka**\n\nBeragam penelitian yang membahas mengenai Mozart Effect ini justru menemukan efek lain yang tidak disangka juga bermanfaat tidak hanya untuk janin dan bayi, tetapi masyarakat secara luas. Berikut beberapa temuan yang dapat disimpulkan:\n\nIbu hamil menjadi lebih tenang\nPaparan musik klasik dapat mengurangi episode kecemasan pada masa kehamilan. [8]\n\nMusik klasik dapat meredakan episode epilepsi\nFluktuasi gelombang otak pada epilepsi dapat diredakan secara signifikan berdasarkan pengamatan menggunakan EEG (electroencephalography). [3]\n\nKondisi bayi pasca-kelahiran lebih stabil\nPemutaran musik klasik juga dapat berdampak pada bayi yang baru lahir agar menjadi lebih tenang, rileks, serta komplikasi pasca-kelahiran pada bayi lebih sedikit. [9]\n====\n### **Referensi**\n\n[1] Rauscher, F H et al. “Music and spatial task performance.” Nature vol. 365,6447 (1993): 611. doi:10.1038/365611a0\n\n[2] Hepper, P G, and B S Shahidullah. “Development of fetal hearing.” Archives of disease in childhood. Fetal and neonatal edition vol. 71,2 (1994): F81-7. doi:10.1136/fn.71.2.f81\n\n[3] Jenkins, J S. “The Mozart effect.” Journal of the Royal Society of Medicine vol. 94,4 (2001): 170-2. doi:10.1177/014107680109400404\n\n[4] Chabris, C. Prelude or requiem for the ‘Mozart effect’?. Nature 400, 826–827 (1999). doi:10.1038/23608\n\n[5] Schellenberg, E Glenn, and Susan Hallam. “Music listening and cognitive abilities in 10- and 11-year-olds: the blur effect.” Annals of the New York Academy of Sciences vol. 1060 (2005): 202-9. doi:10.1196/annals.1360.013\n\n[6] Arya, Ravindra et al. “Maternal Music Exposure during Pregnancy Influences Neonatal Behaviour: An Open-Label Randomized Controlled Trial.” International journal of pediatrics vol. 2012 (2012): 901812. doi:10.1155/2012/901812\n\n[7] Partanen, Eino et al. “Prenatal music exposure induces long-term neural effects.” PloS one vol. 8,10 e78946. (2013). doi:10.1371/journal.pone.0078946\n\n[8] Nwebube, Chineze et al. “Prenatal listening to songs composed for pregnancy and symptoms of anxiety and depression: a pilot study.” BMC complementary and alternative medicine vol. 17,1 256. (2017). doi:10.1186/s12906-017-1759-3\n\n[9] Chorna, O et al. “Neuroprocessing Mechanisms of Music during Fetal and Neonatal Development: A Role in Neuroplasticity and Neurodevelopment.” Neural plasticity vol. 2019 3972918. (2019). doi:10.1155/2019/3972918\n\n[10] Fisher, Martin. American Academy of Pediatrics Textbook of Adolescent Health Care. Elk Grove Village, Ill.: American Academy of Pediatrics. (2011). Print.\n","published_at":"2022-03-26T12:18:26.885Z","createdAt":"2022-03-26T12:18:20.342Z","updatedAt":"2022-04-08T02:15:33.454Z","__v":0,"author":"Jason","instagram":"instagram.com/sycomora.id","minutes":5,"title":"Putar Mozart: apa bisa bikin anak pintar?","id":"623f048ce73cbd00165064d8"},{"_id":"624f9b6041ba470016ed8212","title":"Auditory Beat Stimulation (ABS) untuk Manipulasi Diri","author":"Jason","minutes":5,"tulisan":"Auditory Beat Stimulation (ABS) merupakan suatu terapi yang populer dalam ilmu psikologi dan psikiatri klinis di mana metode ini dapat memanipulasi fokus dan mood seseorang secara bawah sadar. Di sini Sycomora akan membahas bagaimana ABS bekerja, apa prinsip dasar dan mekanisme gelombang suara yang digunakan, serta apa dampak dan manfaat yang bisa dipetik setelah terapi ABS.\n## \n\n\n### **ABS dan Gelombang Otak**\n\nABS secara teknis bekerja paling optimal pada frekuensi setara dengan gelombang otak. Perlu diketahui, ada lima jenis gelombang otak yang semuanya memiliki frekuensi yang berbeda: [1]\n\n**Gelombang Gamma (>30 Hz) “Super-sadar”**\n\nGelombang ini muncul ketika otak seseorang sedang beraktivitas dengan sangat luar biasa, seperti saat sedang mengingat kembali suatu kejadian atau pengalaman, berkonsentrasi, dan kondisi kesadaran seseorang sedang berada di puncaknya (hyper-awareness state).\n\n**Gelombang Beta (13-30 Hz) “Sadar”**\n\nGelombang ini muncul ketika seseorang sedang beraktivitas sehari-hari, di mana secara fisik tubuh seseorang sedang aktif. Kesadaran seseorang berada dalam posisi aware (persepsi terhadap sensor bekerja dengan baik).\n\n**Gelombang Alpha (8-13 Hz) “Santai”**\n\nGelombang ini muncul ketika aktivitas otak sedang terpusat pada satu hal non-fisik yang melibatkan fokus secara rileks. Pada gelombang ini, fungsi memori seseorang berada pada tingkatan maksimal sehingga pembelajaran menjadi efektif dan optimal.\n\n**Gelombang Theta (4-8 Hz)  “Setengah sadar / Bawah sadar”**\n\nGelombang ini muncul ketika seseorang berada pada kondisi rileks, saat meditasi, maupun saat tidur fase REM (rapid eye movement). Perbatasan antara sadar dan tidak sadar ini efektif dalam memicu kreativitas seseorang, serta merupakan frekuensi yang tepat untuk masuk ke dalam kondisi hipnosis.\n\n**Gelombang Delta (0,1-4 Hz) “Tidak Sadar”**\n\nGelombang ini muncul ketika seseorang sedang tertidur pulas. Mimpi terjadi pada saat ini, dan pada frekuensi ini, sensor tubuh dinonaktifkan, dan tubuh dapat melakukan reparasi dan rejuvenasi, seperti penyembuhan luka, peristirahatan organ, bahkan sampai ke pergantian sel kulit mati.\n\n\n===\n###**ABS dan Budaya Manusia**\n\n## Pada budaya manusia, tabuhan gendang pada upacara-upacara kebudayaan dan keagamaan untuk berkomunikasi dengan alam semesta, ternyata, berdasarkan pengukuran gelombang suara, ditemukan bahwa median dari frekuensi yang dibunyikan adalah 5Hz, di mana gelombang tabuhan gendang tersebut dapat menstimulasi aktivasi gelombang theta pada otak manusia. \n\nGelombang theta ini adalah gelombang otak yang aktif pada saat meditasi, dan dianggap oleh spiritualis sebagai kunci untuk masuk ke dalam alam semesta yang lebih luas lagi. [8]\n\nGelombang ini pun dipelajari lebih lanjut dalam penelitian, dan diteliti apakah dapat dimanfaatkan sebagai metode terapi untuk kesehatan fisik dan mental seseorang.\n\n","published_at":"2022-04-08T02:18:15.668Z","createdAt":"2022-04-08T02:18:08.345Z","updatedAt":"2022-04-08T02:28:43.901Z","__v":0,"id":"624f9b6041ba470016ed8212"}]
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

        this.filteredAllBlogs = this.testAllBlogs.filter(blogs => blogs._id != this.id)
        console.log(this.filteredAllBlogs)
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
