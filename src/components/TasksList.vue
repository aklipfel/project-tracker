<template>
  <div class="lists">
    <div class="doings">
      <h2>Tâches en cours</h2>

      <Tile v-for="task in tasks.doing" :key="task.id + 10" :task="task">
        <div class="state">DOING</div></Tile
      >
    </div>

    <div class="todos">
      <h2>Tâches à venir</h2>
      <Tile v-for="task in tasks.todo" :key="task.id + 20" :task="task">
        <div class="state todo">TODO</div></Tile
      >
    </div>

    <div class="dones">
      <h2>Tâches terminées</h2>

      <Tile v-for="task in tasks.done" :key="task.id + 30" :task="task">
        <div class="state done">DONE</div></Tile
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
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .todos,
  .doings,
  .dones {
    width: 90%;

    .tile {
      width: 100%;
    }
  }
}
</style>