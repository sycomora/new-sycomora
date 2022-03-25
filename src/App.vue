<template>
  <Header />
  <router-view/>
  <Footer />
</template>

<script>
import Header from "@/components/PageHeader.vue";
import Footer from '@/components/PageFooter.vue';

export default {
  name: "App",
  components: {
    Header, 
    Footer
  }
}
</script>

<style>
#app {
  font-family: "Circular Std";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #646363;
  text-align: center;
  overflow: hidden;
  background-color: #e5e5e5;
}

</style>
