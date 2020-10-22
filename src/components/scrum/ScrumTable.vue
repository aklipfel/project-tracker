<template>
  <div id="scrum-table">
    <h2 class="title">Avancée des modules</h2>
    <div class="table">
      <div class="grey-container">
        <h2>TO DO</h2>
        <ScrumTableTile v-for="task in tasks.todo" :key="task.id" :task="task"/>
      </div>
      <div class="grey-container">
        <h2>DOING</h2>
        <ScrumTableTile v-for="task in tasks.doing" :key="task.id" :task="task"/>
      </div>
      <div class="grey-container">
        <h2>DONE</h2>
        <ScrumTableTile v-for="task in tasks.done" :key="task.id" :task="task" :done="true"/>
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

  h3{
    font-size:2vw;
  }

  .table {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    width: 95%;

    .grey-container {
      width: 15vw;
      margin: 0 1vw;
      min-height: 60vh;
    }
  }
}
</style>