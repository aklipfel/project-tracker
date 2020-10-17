<template>
  <div id="nav">
    <router-link to="/"><i class="fas fa-home fa-2x active"></i></router-link>
    <router-link to="/about"><i class="fas fa-bell fa-2x"></i></router-link>
    <router-link to="/about"
      ><i class="fas fa-check-double fa-2x"></i
    ></router-link>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
#nav {
  float: left;
  display: flex;
  flex-direction: column;
  background-color: $darkgrey;
  width: 7%;
  height: 100%;

  a {
    color: $lightgrey;
    text-decoration: none;
    margin: 15px 0;
  }

  a:hover {
    color: white;
  }

  .active {
    background-color: $darkred;
    border-radius: 5px;
  }

  i {
    padding: 10px;
  }
}
</style>