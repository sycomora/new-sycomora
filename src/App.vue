<template>
  <div>
    <!-- <SideBar class="fixed z-30"/> -->
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/PageHeader.vue";
import Footer from '@/components/PageFooter.vue';
// import SideBar from '@/components/SideBar.vue';

export default {
  name: "App",
  components: {
    Header, 
    Footer,
    // SideBar
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
