<template>
  <div class="table-tile" :class="{ done: done }">
    <h2 class="module-name">{{ task.name }}</h2>
    <h3 class="module-descr">
      {{ task.descr }}
    </h3>
  </div>
</template>

<script>
export default {
  name: "ScrumTableTile",
  props: {
    task: { types: Object },
    done : {types: Boolean}
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.table-tile {
  margin: 0 auto;
  background-color: $dark;
  border-radius: 5px;
  margin: 10px 5px;
  padding: 5px;
  text-align: left;
}

.done{
  background-color:$darkred;
}
.module-name {
  font-size: 1.8vw;
  margin: 5px 0;
}

.module-descr {
  font-size: 1.2vw;
  color: #fff;
  font-weight: 400;
  margin: 10px 0;
}
</style>