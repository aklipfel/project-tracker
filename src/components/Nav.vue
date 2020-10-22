<template>
  <div id="nav">
    <router-link to="/">
      <i
        @click="setActive(1)"
        v-bind:class="{ active: active == 1 }"
        class="fas fa-home fa-2x"
      ></i
    ></router-link>
    <router-link to="/communications">
      <i
        @click="setActive(2)"
        v-bind:class="{ active: active == 2 }"
        class="fas fa-comments fa-2x"
      >
      </i
    ></router-link>
    <router-link to="/tasks"
      ><i
        @click="setActive(3)"
        v-bind:class="{ active: active == 3 }"
        class="fas fa-check-double fa-2x"
      ></i
    ></router-link>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      active: 1,
    };
  },
  methods: {
    setActive(val) {
      this.active = val;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
#nav {
  float: left;
  display: flex;
  flex-direction: column;
  background-color: $darkgrey;
  width: $nav_width;
  height: 100%;
  font-size: 1vw;

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