<template>
  <div id="topbar">
    <div>
      <h1>{{ title }}</h1>
      <h4 v-if="delivery">Date de livraison prévue : {{ delivery.format('D/MM/YYYY')}}</h4>
    </div>

    <div class="buttons">
      <slot> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  props: ["title", "delivery"],
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
  padding-bottom: 20px;
}

.buttons {
  button {
    height: 3vw;
    margin: 0px 10px;
    min-width: 100px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    color: $lightgrey;
    font-size: 1.3vw;
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