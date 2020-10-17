<template>
  <div id="topbar">
    <div class="title">
      <h1>{{ title }}</h1>
      <h4>Date de livraison prévue : 28/10/2020</h4>
    </div>

    <div class="buttons">
      <slot> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  props: ["title"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
#topbar {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom:10px;
}

.buttons {
  button {
    height: 40px;
    margin: 0px 10px;
    min-width: 100px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    color: $lightgrey;
    font-size: 18px;
    i {
      margin-right: 10px;
    }
  }

  .accept {
    background-color: $green;
  }
  .red {
    background-color: $darkred;
  }
}
</style>