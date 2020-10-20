<template>
  <div id="tasks">
    <Hierarchy :sendSelected="setSelected" :selected="selected"/>

    <div class="module">
      <div v-if="selected.id == project.id" class="infos">
        <h1>Mon Projet</h1>
        <h4>Livraison prévue demain</h4>
      </div>
      <div v-else class="infos">
        <h1>Auth</h1>
        <h4>Livraison prévue demain</h4>
      </div>
      <div class="content">
        <ScrumTable v-if="selected.id == project.id" />
        <TasksList :tasks="selected.tasks" v-else />
        <Versioning />
      </div>
    </div>
  </div>
</template>

<script>
import TasksList from "@/components/TasksList";
import ScrumTable from "@/components/scrum/ScrumTable";
import Versioning from "@/components/Versioning";
import Hierarchy from "@/components/Hierarchy";
export default {
  name: "Tasks",
  components: { TasksList, Versioning, Hierarchy, ScrumTable },
  data() {
    return {
      toggleProject: true,
      project: {id : 0, name:"Mon Projet", tasks:[]},
      selected: {id : 0, name:"Mon Projet",tasks:[]},
      //To State
      modules: [
        { id: 1, name: "Auth", tasks: {doing: ["",""], todo: [""], done: ["","","",""]} },
        { id: 2, name: "Daemon", tasks: {doing: ["","",""], todo: ["","","",""], done: [""]}},
      ],
    };
  },

  methods: {
    setSelected(val) {
      this.selected = val;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

#tasks {
  display: flex;

  .module {
    width: 100%;
    padding: 20px;
  }
}
</style>