<template>
  <div id="app">
    <img class="bacground-home" src="./assets/bacground-app.png" alt="" />
    <nav>
      <!-- <HomeView /> -->
    </nav>
    <router-view />
  </div>
</template>

<script>
// import HomeView from "@/views/HomeView.vue";
export default {
  name: "App",
  components: {
    // HomeView,
  },
};
</script>

<style scoped lang="scss">
.bacground-home {
  position: absolute;
  z-index: -10;
  margin-top: 0px;
  height: 100%;
  width: 100%;
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  /* background-image: url(./assets/bacground-app.png); */
  /* background-image: url(./assets/bacground-home2.png); */
  /* color: #2c3e50; */
}

nav {
  padding: 30px;
  /* position: absolute; */

  /* a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  } */
}
</style>
