<template>
  <div id="app">
    <div id="red-bar"></div>
    <Nav />
    <router-view />
  </div>
</template>


<script>
import Nav from "@/components/Nav";
export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>


<style lang="scss">
@import "@/assets/scss/_variables.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: inherit;
}
#red-bar {
  height: 5vh;
  width: 100%;
  background-color: $darkred;
}
body {
  margin: 0;
  height: 95vh;
}
</style>
