<template>
  <div class="lists">
    <div class="doings">
      <h2>Tâches en cours</h2>

      <Tile v-for="index in tasks.doing.length" :key="index + 10">
        <div class="state">DOING</div></Tile
      >
    </div>

    <div class="todos">
      <h2>Tâches à venir</h2>
      <Tile v-for="index in tasks.todo.length" :key="index + 20">
        <div class="state todo">DOING</div></Tile
      >
    </div>

    <div class="dones">
      <h2>Tâches terminées</h2>

      <Tile v-for="index in tasks.done.length" :key="index + 30">
        <div class="state done">DOING</div></Tile
      >
    </div>
  </div>
</template>

<script>
import Tile from "@/components/Tile";
export default {
  name: "TasksList",
  components: { Tile },
  props: {
    tasks: { types: Array },
  },
};
</script>

<style lang="scss" scoped>
.lists {
  height: 100vh;
  width:75%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .todos, .doings, .dones{ 
    width:90%;

    .tile{
      width:100%;
    }
  }
}


</style>