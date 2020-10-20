<template>
  <div class="grey-container tile">
    <slot></slot>
    <div class="infos">
      <h3>Inscription</h3>
      <p class="descr">Il s'agit de la description de la tâche actuelle. Normalement cela ne devrait pas dépasser une certaine longueur ou alors je lui coupe alègrement le siffle</p>
      <p>Livraison prévue demain</p>
    </div>
    <p>></p>
  </div>
</template>

<script>
export default {
  name: "Tile",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.tile {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
  height: 60px;

  .state {
    font-size: 24px;
    font-weight: 100;
    border-radius: 10px;
    background-color: $lightred;
    padding: 5px;
  }

  .done{
	  background-color: $green;
  }

  .toddo{
	  background-color: $darkred;
  }

  .checked {
    background-color: $green;
  }

  .infos {
	  display:flex;
	  flex-grow: 1;
	  padding: 5px 40px;
	  justify-content: space-between;
	  align-items: center;
    p {
      margin: 0;
    }
    .descr{
      padding:5px;
      font-size:14px;
      margin:0px 20px;
      max-width:400px;
      max-height:40px;
      text-align:left;
      word-wrap: none;
      overflow:hidden;
      white-space: nowrap;
      text-overflow : ellipsis;
    }
    h3 {
      margin-bottom: 2px;
    }
  }
}
</style>