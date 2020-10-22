<template>
  <div class="lists">
    <div class="doings">
      <h2>Tâches en cours</h2>

      <TaskTile v-for="task in tasks.doing" :key="task.id + 10" :task="task">
        <div class="state">DOING</div></TaskTile
      >
    </div>

    <div class="todos">
      <h2>Tâches à venir</h2>
      <TaskTile v-for="task in tasks.todo" :key="task.id + 20" :task="task">
        <div class="state todo">TODO</div></TaskTile
      >
    </div>

    <div class="dones">
      <h2>Tâches terminées</h2>

      <TaskTile v-for="task in tasks.done" :key="task.id + 30" :task="task">
        <div class="state done">DONE</div></TaskTile
      >
    </div>
  </div>
</template>

<script>
import TaskTile from "@/components/TaskTile";
export default {
  name: "TasksList",
  components: { TaskTile },
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