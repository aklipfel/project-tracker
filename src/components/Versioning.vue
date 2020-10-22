<template>
  <div class="versioning">
    <h2>Versioning</h2>
    <div class="grey-container">
      <h3>@{{ branch }}</h3>

      <div class="commits">
        <div v-for="index in 2" :key="index" class="commit">
          <h3>Inscription par email</h3>
          <span>#f86684cf50e6123dacbd11ddefdf7c...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//To retrieve commits, computed method to fetch commits on GitHub API
export default {
  name: "Versioning",
  props: {
    branch: { types: String },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.versioning {
  width: 25%;

  h3 {
    text-align: left;
  }

  .grey-container {
    background-color: $darkgrey;
    margin: 0px;
    padding: px;
    min-height: 60vh;
  }

  .commits {
    margin-top: 10px;
    padding: 0 10px;
    border-left: 1px solid $lightgrey;

    .commit {
      background-color: $dark;
      padding: 10px;
      margin: 15px 0;
      text-align: left;

      h3 {
        font-size: 1vw;
        text-align: left;
        margin: 0;
      }

      span {
        color: $lightgrey;
        font-size: 0.6vw;
      }
    }
  }
}
</style>