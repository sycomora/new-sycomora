<template>
  <div class="home w-screen h-full">
    <!-- First Section -->
    <div class="h-screen grid grid-cols-5 grid-rows-2 gap-8 py-16 mx-12 px-10 xxl:px-32">
      <div
        class="
          relative
          rounded-xl
          object-cover
          col-span-3
          row-span-2
          h-full
          text-primary
        "
      >
        <div
          class="
            absolute
            bottom-[195px]
            z-10
            bg-secondary
            h-min
            w-max
            px-5
            py-2
            m-12
            rounded-xl
            text-white text-2xl
            flex
            items-center
            justify-center
          "
        >
          Editors' Choice
        </div>
        <div
          class="
            h-60
            flex flex-col gap-1
            justify-center
            backdrop-opacity-20
            bg-white/100
            rounded-xl
            absolute
            m-6
            bottom-0
            p-5
          "
        >
          <p class="text-5xl font-black text-left">
            Putar Mozart: apa bisa bikin anak pintar?
          </p>
          <p class="text-xl text-left">
            Cerita tentang keilmiahan dan efektivitas paparan musik klasik pada
            kecerdasan anak.
          </p>
          <p class="text-lg text-left opacity-70">5 menit baca</p>
        </div>
        <img
          src="@/assets/Main.png"
          alt="Main Image"
          class="object-cover w-full h-full rounded-xl"
        />
      </div>
      <div class="w-full col-span-2 rounded-xl flex flex-col text-primary">
        <div class="w-full h-1/2 rounded-t-xl">
          <img
            src="@/assets/Main2.png"
            alt=""
            class="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div class="w-full h-1/2 rounded-b-xl flex flex-col p-5 bg-white justify-center">
          <p class="text-3xl font-black text-left">
            Pilihan makanan untuk kamu yang memiliki PCOS
          </p>
          <p class="text-lg font-bold text-left">
            Kamu masih punya banyak sekali pilihan makanan yang lezat dan
            bergizi.
          </p>
        </div>
      </div>
      <div
        class="
          col-span-2
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
        <p class="text-3xl font-black text-left">
          Hubunganmu bermasalah? Bisa jadi akibat beda jenis attachment.
        </p>
        <p class="text-xl font-bold text-left">
          Perbedaan ini sering kali menjadi sumber pertengkaran pasangan. Kenali
          lebih dalam apa jenis attachment-mu melalui tes ini dan pahami
          solusinya.
        </p>
        <p class="text-xl font-bold text-left opacity-70">
          MomoFinder | 2 menit telusur
        </p>
      </div>
    </div>
    <!-- Second Section -->
    <div class="h-90 w-screen bg-tersiary relative p-10">
      <div
        class="
          w-max
          h-min
          absolute
          top-0
          rounded-b-xl
          ml-5
          p-5
          pt-10
          text-white text-4xl
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
          justify-end
          text-tersiary
          px-10
        "
      >
        <div class="flex flex-col items-center justify-center">
          <div class="relative h-full flex items-center justify-center">
            <input
              type="text"
              class="px-3 py-4 bg-white rounded-xl text-xl w-96 h-10"
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
          class="bg-white h-full w-max p-2 px-4 rounded-xl font-bold text-xl"
        >
          Lihat semua topik >
        </button>
      </div>
      <div class="grid grid-cols-5 gap-0 text-white text-2xl my-8">
        <div class="flex flex-col items-center justify-center">
          <img
            src="@\assets\Topic1.png"
            alt="Penyakit Kronis"
            class="w-40 h-40"
          />
          <p>Penyakit Kronis</p>
        </div>
        <div class="flex flex-col items-center justify-center">
          <img
            src="@\assets\Topic1.png"
            alt="Penyakit Kronis"
            class="w-40 h-40"
          />
          <p>Penyakit Kronis</p>
        </div>
        <div class="flex flex-col items-center justify-center">
          <img
            src="@\assets\Topic1.png"
            alt="Penyakit Kronis"
            class="w-40 h-40"
          />
          <p>Penyakit Kronis</p>
        </div>
        <div class="flex flex-col items-center justify-center">
          <img
            src="@\assets\Topic1.png"
            alt="Penyakit Kronis"
            class="w-40 h-40"
          />
          <p>Penyakit Kronis</p>
        </div>
        <div class="flex flex-col items-center justify-center">
          <img
            src="@\assets\Topic1.png"
            alt="Penyakit Kronis"
            class="w-40 h-40"
          />
          <p>Penyakit Kronis</p>
        </div>
      </div>
    </div>
    <!-- Third Section -->
    <div class="h-full w-screen my-14 px-24 xl:px-32">
      <div class="flex justify-between items-end w-full">
        <p class="text-4xl font-bold">Artikel Terbaru: </p>
        <a href="" class="text-lg text-tersiary hover:underline ">Lihat semua ></a>
      </div>
      <div class="grid grid-cols-2 grid-rows-2 gap-x-6 gap-y-8 w-full h-1/2 mt-8 content-center justify-items-center">
        <div v-for="x in 4" :key="x" class="w-full h-full bg-white rounded-xl text-primary grid grid-cols-3 gap-3 content-center p-5">
          <div class=" rounded-xl w-full h-full object-center">
            <img src="@/assets/Main.png" alt="" class="object-cover w-full h-full rounded-xl">
          </div>
          <div class="col-span-2 text-left flex flex-col justify-between">
            <p class="text-2xl font-bold">Judul artikel ditulis di sini maksimal 3 baris seperti ini contohnya.</p>
            <p class="text-lg">Subjudul ditulis di sini maksimal 2 baris seperti ini contohnya.</p>
            <p class="opacity-70">X menit baca</p>
          </div>
        </div>
      </div>

    </div>
    <!-- Fourth Section -->
    <div class="h-full w-screen my-16 px-24 xl:px-32">
      <div class="grid grid-cols-2 w-full">
        <img src="@/assets/Vitae.png" alt="Vitae by Sycomora" class="rounded-l-xl w-full">
        <div class="w-full flex flex-col gap-5 items-start justify-center p-8 text-xl font-semibold text-left bg-white rounded-r-xl">
          <p class="text-tersiary">Vitae by Sycomora</p>
          <p class="text-5xl font-black ">Dengarkan cerita dan pengalaman langsung dari orangnya.</p>
          <p class="text-primary">Podcast Vitae menyuguhkan wawasan dari sudut pandang yang jarang atau belum pernah diungkit, bersama narasumber yang berpengalaman di bidangnya langsung.</p>
          <p class="text-primary">Kamu bisa dengarkan Podcast Vitae by Sycomora hanya di Spotify. Unduh aplikasinya sekarang dan klik <a href="" class="text-tersiary hover:underline">di sini</a> untuk langsung mendengarkan.</p>
        </div>
      </div>
    </div>
    <!-- Fifth Section -->
    <div class="h-full w-screen -mt-8 px-24 xl:px-32">
      <div class="flex justify-between items-end w-full">
        <p class="text-4xl font-bold">Topik Bahasan per Penyakit: </p>
        <a href="" class="text-lg text-tersiary hover:underline ">Lihat semua ></a>
      </div>
      <div class="w-full flex px-5 justify-between gap-0 text-primary font-bold text-2xl my-5">
        <div class="flex flex-col items-center justify-center">
          <img
            src="@\assets\Penyakit1.svg"
            alt="Penyakit Kronis"
            class="w-40 h-40"
          />
          <p>Penyakit Kronis</p>
        </div>
        <div class="flex flex-col items-center justify-center">
          <img
            src="@\assets\Penyakit1.svg"
            alt="Penyakit Kronis"
            class="w-40 h-40"
          />
          <p>Penyakit Kronis</p>
        </div>
        <div class="flex flex-col items-center justify-center">
          <img
            src="@\assets\Penyakit1.svg"
            alt="Penyakit Kronis"
            class="w-40 h-40"
          />
          <p>Penyakit Kronis</p>
        </div>
        <div class="flex flex-col items-center justify-center">
          <img
            src="@\assets\Penyakit1.svg"
            alt="Penyakit Kronis"
            class="w-40 h-40"
          />
          <p>Penyakit Kronis</p>
        </div>
        <div class="flex flex-col items-center justify-center">
          <img
            src="@\assets\Penyakit1.svg"
            alt="Penyakit Kronis"
            class="w-40 h-40"
          />
          <p>Penyakit Kronis</p>
        </div>
      </div>

    </div>
    <!-- Sixth Section -->
    <div class="h-full w-screen px-24 mt-12 xl:px-32">
      <div class="flex justify-between items-end w-full">
        <p class="text-4xl font-bold">Produk Ulasan Kami: </p>
        <a href="" class="text-lg text-tersiary hover:underline ">Lihat semua ></a>
      </div>
      <div class="w-full flex justify-between px-5 gap-0 text-primary font-bold text-2xl my-5">
        <div class="flex flex-col items-center justify-center">
          <img
            src="@\assets\Ulasan1.png"
            alt="Penyakit Kronis"
            class="w-40 h-40"
          />
          <p>Penyakit Kronis</p>
        </div>
        <div class="flex flex-col items-center justify-center">
          <img
            src="@\assets\Ulasan1.png"
            alt="Penyakit Kronis"
            class="w-40 h-40"
          />
          <p>Penyakit Kronis</p>
        </div>
        <div class="flex flex-col items-center justify-center">
          <img
            src="@\assets\Ulasan1.png"
            alt="Penyakit Kronis"
            class="w-40 h-40"
          />
          <p>Penyakit Kronis</p>
        </div>
        <div class="flex flex-col items-center justify-center">
          <img
            src="@\assets\Ulasan1.png"
            alt="Penyakit Kronis"
            class="w-40 h-40"
          />
          <p>Penyakit Kronis</p>
        </div>
        <div class="flex flex-col items-center justify-center">
          <img
            src="@\assets\Ulasan1.png"
            alt="Penyakit Kronis"
            class="w-40 h-40"
          />
          <p>Penyakit Kronis</p>
        </div>
      </div>

    </div>
    <!-- Seventh Section -->
    <div class="h-full w-screen my-16 px-24 xl:px-32">
      <div class="grid grid-cols-2 relative w-full">
        <div class="w-full flex flex-col gap-5 items-start justify-center p-8 text-xl font-semibold text-left bg-white rounded-l-xl">
          <p class="text-5xl font-black ">Menyajikan informasi kesehatan yang akurat dan sederhana.</p>
          <p class="text-primary">Sycomora memasang standar penyajian konten yang sangat tinggi dan menjunjung tinggi akuntabilitas, transparansi, objektivitas, serta terhindar dari conflict of interest. </p>
          <p class="text-primary">Setiap unggahan telah melalui proses review yang ketat dan selalu diperbarui setiap saat.</p>
          <p class="text-primary">Produk-produk yang Sycomora ulas selalu berdasarkan objektivitas dan atas dasar memberikan manfaat bagi masyarakat luas.</p>
        </div>
        <img src="@/assets/Pahami.png" alt="Pahami Cara Kerja Kami" class="rounded-r-xl w-full" >
        <div class="absolute bottom-10 ">
        </div>      
      </div>
    </div>
    <!-- Last Section -->
    <div class="h-full w-screen -mt-8 mb-14 px-24 xl:px-32">
      <div class="flex justify-between items-end w-full">
        <p class="text-4xl font-bold">Artikel Sponsor Kami: </p>
        <a href="" class="text-lg text-tersiary hover:underline ">Lihat semua ></a>
      </div>
      <div class="w-full flex justify-around gap-0 text-primary font-bold text-2xl text-left my-5">
        <div class="w-2/5 flex flex-col px-4 items-center justify-center">
          <div class="w-full h-56 rounded-xl bg-primary opacity-25"></div>
          <p class="w-45">Judul artikel ditulis di sini maksimal 3 baris seperti ini contohnya.</p>
        </div>
        <div class="w-2/5 flex flex-col px-4 items-center justify-center">
          <div class="w-full h-56 rounded-xl bg-primary opacity-25"></div>
          <p class="w-45">Judul artikel ditulis di sini maksimal 3 baris seperti ini contohnya.</p>
        </div>
        <div class="w-2/5 flex flex-col px-4 items-center justify-center">
          <div class="w-full h-56 rounded-xl bg-primary opacity-25"></div>
          <p class="w-45">Judul artikel ditulis di sini maksimal 3 baris seperti ini contohnya.</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style>
</style>
