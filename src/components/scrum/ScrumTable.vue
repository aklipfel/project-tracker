<template>
  <div id="scrum-table">
    <h2>Avancée des modules</h2>
    <div class="table">
      <div class="grey-container">
        <h3>TO DO</h3>
        <ScrumTableTile v-for="task in tasks.todo" :key="task.id" :task="task"/>
      </div>
      <div class="grey-container">
        <h3>DOING</h3>
        <ScrumTableTile v-for="task in tasks.doing" :key="task.id" :task="task"/>
      </div>
      <div class="grey-container">
        <h3>DONE</h3>
        <ScrumTableTile v-for="task in tasks.done" :key="task.id" :task="task"/>
      </div>
    </div>
  </div>
</template>

<script>
import ScrumTableTile from "@/components/scrum/ScrumTableTile";
export default {
  name: "ScrumTable",
  components: {
    ScrumTableTile,
  },
  props : {
    tasks : {
      types: Object
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

#scrum-table {
  width: 75%;

  .table {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    width: 90%;

    .grey-container {
      width: 29%;
      min-height: 60vh;
    }
  }
}
</style>