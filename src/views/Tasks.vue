<template>
  <div id="tasks">
    <Hierarchy :sendSelected="setSelected" :selected="selected" />

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
      project: { id: 0, name: "Mon Projet", tasks: [] },
      selected: { id: 0, name: "Mon Projet", tasks: [] },
      //To State
      modules: [
        {
          id: 1,
          name: "Auth",
          tasks: {
            doing: [
              {
                id: 1,

                name: "Mise à jour de la base de données",
                descr:
                  "Description de la tâche actuelle. Normalement cela ne devrait pas dépasser une certaine longueur ou alors je lui coupe alègrement le siffle",
              },
              {
                id: 2,
                name: "Doing 2",
                descr:
                  "Description de la tâche actuelle. Normalement cela ne devrait pas dépasser une certaine longueur ou alors je lui coupe alègrement le siffle",
              },
            ],
            todo: [
              {
                id: 3,
                name: "Todo 1",
                descr:
                  "Description de la tâche actuelle. Normalement cela ne devrait pas dépasser une certaine longueur ou alors je lui coupe alègrement le siffle",
              },
              {
                id: 4,
                name: "Todo 2",
                descr:
                  "Description de la tâche actuelle. Normalement cela ne devrait pas dépasser une certaine longueur ou alors je lui coupe alègrement le siffle",
              },
              {
                id: 5,
                name: "Todo 3",
                descr:
                  "Description de la tâche actuelle. Normalement cela ne devrait pas dépasser une certaine longueur ou alors je lui coupe alègrement le siffle",
              },
              {
                id: 6,
                name: "Todo 4",
                descr:
                  "Description de la tâche actuelle. Normalement cela ne devrait pas dépasser une certaine longueur ou alors je lui coupe alègrement le siffle",
              },
            ],
            done: [
              {
                id: 7,
                name: "Done 1",
                descr:
                  "Description de la tâche actuelle. Normalement cela ne devrait pas dépasser une certaine longueur ou alors je lui coupe alègrement le siffle",
              },
            ],
          },
        },
        {
          id: 2,
          name: "Daemon",
          tasks: {
            doing: [
              {
                id: 1,
                name: "Doing 1",
                descr:
                  "Description de la tâche actuelle. Normalement cela ne devrait pas dépasser une certaine longueur ou alors je lui coupe alègrement le siffle",
              },
              {
                id: 2,
                name: "Doing 2",
                descr:
                  "Description de la tâche actuelle. Normalement cela ne devrait pas dépasser une certaine longueur ou alors je lui coupe alègrement le siffle",
              },
            ],
            todo: [
              {
                id: 3,
                name: "Todo 1",
                descr:
                  "Description de la tâche actuelle. Normalement cela ne devrait pas dépasser une certaine longueur ou alors je lui coupe alègrement le siffle",
              },
              {
                id: 4,
                name: "Todo 2",
                descr:
                  "Description de la tâche actuelle. Normalement cela ne devrait pas dépasser une certaine longueur ou alors je lui coupe alègrement le siffle",
              },
              {
                id: 5,
                name: "Todo 3",
                descr:
                  "Description de la tâche actuelle. Normalement cela ne devrait pas dépasser une certaine longueur ou alors je lui coupe alègrement le siffle",
              },
              {
                id: 6,
                name: "Todo 4",
                descr:
                  "Description de la tâche actuelle. Normalement cela ne devrait pas dépasser une certaine longueur ou alors je lui coupe alègrement le siffle",
              },
            ],
            done: [
              {
                id: 7,
                name: "Done 1",
                descr:
                  "Description de la tâche actuelle. Normalement cela ne devrait pas dépasser une certaine longueur ou alors je lui coupe alègrement le siffle",
              },
            ],
          },
        },
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