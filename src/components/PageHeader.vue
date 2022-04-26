<template>
  <div
    class="
      w-full
      h-24
      text-white text-xl
      bg-primary
      flex
      items-end
      py-4
      lg:items-center
      justify-between
      px-4
      lg:px-12
    "
  >
    <div class="banner hidden lg:flex gap-8">
      <a href="/"
        ><img src="@/assets/Banner.svg" alt="Banner Sycomora" class=""
      /></a>
      <nav class="flex gap-10 text-left items-center">
        <a href="/kesehatan">Kesehatan</a>
        <a href="/telusur">Telusur</a>
        <a href="/rencana">Rencana</a>
        <a href="/momofinder">MomoFinder</a>
        <a href="/vitae">Vitae</a>
      </nav>
    </div>
    <div class="hidden lg:flex gap-4 text-white items-center">
      <a href="">Masuk</a>
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
    <div class="flex lg:hidden justify-between items-end gap-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        />
      </svg>
      <a href="/"
        ><img
          src="@/assets/Banner.svg"
          alt="Banner Sycomora"
          class="h-8 bg-cover"
      /></a>
    </div>
    <div class="flex lg:hidden justify-between items-end gap-3">
      <a
        class="
          h-8
          w-8
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
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>