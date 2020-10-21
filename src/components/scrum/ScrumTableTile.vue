<template>
  <div class="table-tile">
    <div class="module-name">Auth</div>
    <div class="module-descr">
      Authentification par email, Facebook, Google et Apple
    </div>
  </div>
</template>

<script>
export default {
  name: "ScrumTableTile",
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.table-tile {
  margin: 0 auto;
  background-color: $dark;
  border-radius: 5px;
  margin: 10px 5px;
  padding: 5px;
  text-align: left;
  
}
.module-name {
    font-size: 1.4vw;
    margin: 5px 0;
  }

  .module-descr {
    font-size: 1vw;
    color: #fff;
    font-weight: 400;
    margin: 10px 0;
  }
</style>