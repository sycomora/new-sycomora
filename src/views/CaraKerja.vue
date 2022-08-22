<template>
<!--ini 404 / Coming Soon-->
    <div class="w-screen h-screen flex flex-col justify-center items-center gap-6 p-8 lg:p-10">
        <img class="bg-tersiary p-3 rounded-xl" src="@/assets/Banner.svg" alt="Banner Sycomora">
        <p class="text-primary text-3xl lg:text-5xl font-black">Sabar Yaa!.</p>
        <p class="text-primary text-lg lg:text-2xl">Tim Teknik kami sedang me-refill magic mereka. <br>Sambil menunggu,</p>
        <a @click="$router.back()" class="cursor-pointer w-72 lg:w-96 h-min py-3 px-2 text-lg lg:text-2xl bg-tersiary rounded-2xl flex justify-center items-center text-white">
            <p class="w-full ">Kembali ke halaman sebelumnya aja yuk!</p>
        </a>
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