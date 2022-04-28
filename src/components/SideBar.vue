<template>
    <div class="fixed z-30 w-1/2 h-screen bg-tersiary flex flex-col items-center justify-around text-white">
        <div class="w-full h-12">
            <button @click="closeSideBar()">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>
        <div class="flex flex-col gap-2">
            <img class="w-32 h-32 object-cover rounded-full" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="User Photo">
            <p>Hi, User</p>
        </div>
        <nav class="flex flex-col gap-10 text-xl text-left items-center">
            <a href="/kesehatan">Kesehatan</a>
            <a href="/telusur">Telusur</a>
            <a href="/rencana">Rencana</a>
            <a href="/momofinder">MomoFinder</a>
            <a href="/vitae">Vitae</a>
        </nav>
        <div class="flex gap-4">
            <a
            href="https://www.instagram.com/sycomora.id/"
            class="
            h-10
            w-10
            bg-white
            rounded-full
            flex
            items-center
            justify-center
            transition
            duration-500
            ease-in-out
            transform
            hover:scale-110
            cursor-pointer
            "
        >
            <img
            src="@/assets/instagram.svg"
            class="w-6 h-6"
            alt="Instagram Sycomora"
            />
            </a>
            <a
                class="
                h-10
                w-10
                bg-white
                rounded-full
                flex
                items-center
                justify-center
                transition
                duration-500
                ease-in-out
                transform
                hover:scale-110
                cursor-pointer
                "
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-primary h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
                >
                <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                />
                </svg>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpened: false,
        }
    },
    created() {
        this.isOpened = localStorage.getItem()
    },
    methods: {

    },
}
</script>

<style lang="scss" scoped>

</style>