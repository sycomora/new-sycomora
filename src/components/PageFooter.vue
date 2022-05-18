<template>
    <div class="w-full h-full lg:h-80 p-8 lg:p-12 bg-gradient-to-tl from-tersiary to-[#c3d8fb] flex flex-col lg:flex-row gap-6 lg:gap-0 items-center justify-around text-white">
        <div class="flex flex-col w-full lg:w-96 text-left gap-2 ">
            <p class="text-2xl lg:text-4xl font-bold">Buat akun Sycomora sekarang juga!</p>
            <p class="text-md lg:text-xl font-regular lg:font-semibold">Dapatkan manfaat lebih dan kamu juga berkesempatan untuk bergabung dalam komunitas besar kami.</p>
            <div class="w-max h-min flex justify-center items-center px-3 py-2 bg-white text-tersiary rounded-xl">Daftar Sekarang</div>
        </div>
        <div class="flex flex-col lg:flex-row gap-6 lg:gap-32 items-center justify-center py-4 lg:py-12">
            <div class="grid grid-cols-2 lg:flex flex-col gap-x-5 lg:gap-x-0 text-left text-md lg:text-xl h-32 lg:h-64 justify-between w-full">
                <a class="h-0"><p class="hover:underline w-full" href="">Tentang Kami</p></a>
                <a class="h-0"><p class="hover:underline w-full" href="">Hubungi Kami</p></a>
                <a class="h-0"><p class="hover:underline w-full" href="">Komunitas</p></a>
                <a class="h-0"><p class="hover:underline w-full" href="">Afiliasi</p></a>
                <a class="h-0"><p class="hover:underline w-full" href="">Integritas Konten</p></a>
                <a class="h-0"><p class="hover:underline w-full" href="">Ketentuan Privasi</p></a>
                <a class="h-0"><p class="hover:underline w-full" href="">Kebijakan Periklanan</p></a>
            </div>
            <div class="hidden lg:block w-1 h-64 rounded-full bg-white">
            </div>
            <div class="block lg:hidden h-1 w-full rounded-full bg-white">
            </div>
            <div class="flex flex-col w-full">
                <div class="flex gap-5 ">
                    <img src="../assets/LogoWhite.svg" alt="Logo Sycomora" class="w-24">
                    <div class="flex flex-col w-full lg:w-96 text-md text-left ">
                        <p class="text-lg">Sycomora Welfare Center</p>
                        <p>Hubungi Kami:</p>
                        <p>cs@sycomora.id</p>
                        <p>+62 813 1881 7897</p>
                    </div>
                </div>
                <div class="flex flex-col text-left w-full lg:w-96 text-sm">
                    <img src="../assets/Label.png" class="w-40" alt="Sycomora TM">
                    <p class="font-light">© 2020-2022 Sycomora Welfare Center. Hak cipta dilindungi undang-undang. Semua layanan website, konten, dan produk adalah untuk informasi semata. Sycomora tidak menyediakan layanan konsultasi, diagnosis, dan pengobatan apa pun.</p>
                    <a href="" class="hover:underline ">Baca lebih lanjut</a>
                </div>
            </div>
        </div>

  </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>