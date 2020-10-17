<template>
  <div id="app">
    <div id="red-bar"></div>
    <Nav />
    <div class="view">
      <router-view />
    </div>
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

@font-face {
  font-family: "Rubik";
  src: url("./assets/fonts/Rubik/Rubik-Regular.ttf") format("ttf");
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:$lightgrey;
  height: 100vh;
  font-family: "Rubik";
}
#red-bar {
  height: 5vh;
  width: 100%;
  background-color: $darkred;
}
body {
  margin: 0;
  height: 95vh;
  background-color: $dark;
  overflow:hidden;
}

.view{
  padding:20px;
  padding-bottom:0px;
  margin-left: $nav_width;
}

h1 {
  color: $lightgrey;

  font-size: 38px;
  font-weight: 500;
  text-align: left;
  margin-bottom: 5px;
  margin-top: 5px;
}

h2 {
  color: $lightgrey;
  margin: 50px 0px;
  font-weight: 400;
  font-size: 28px;
  text-align: left;
}

h3{
  font-size:26px;
  font-weight: 400;
  color:$lightgrey;
  margin:0;
}

h4 {
  color: $subtitle;
  text-align: left;
  font-weight: 400;
  margin: 0px;
  font-size: 20px;
}

.grey-container{
  background-color:$darkgrey;
  border-radius:5px;
  min-height:50px;
  padding:10px;
  overflow: hidden;
}
</style>
