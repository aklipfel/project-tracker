<template>
  <div id="tasks">
    <Hierarchy :sendSelected="setSelected" :selected="selected" />

    <div class="module">
      <TopBar :title="selected.name" :delivery="selected.delivery" />
      <div class="switch-container">
        <div class="switch">
          <div :class="{ active: scrumTable }" @click="switchView">
            Scrum Table
          </div>
          <div :class="{ active: !scrumTable }" @click="switchView">List</div>
        </div>
      </div>
      <div class="content">
        <ScrumTable v-if="scrumTable" :tasks="selected.tasks" />
        <TasksList v-else :tasks="selected.tasks" />
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
import TopBar from "@/components/TopBar";
export default {
  name: "Tasks",
  components: { TasksList, Versioning, Hierarchy, ScrumTable, TopBar },
  data() {
    return {
      toggleProject: true,
      scrumTable: true,
      project: {
        id: 0,
        name: "Mon Projet",
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
      selected: {
        id: 0,
        name: "Mon Projet",
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
    switchView() {
      this.scrumTable = !this.scrumTable;
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

  .switch-container {
    width: 75%;

    .switch {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      background-color: $darkgrey;
      border-radius: 10px;
      div {
        flex: 1 1 2;
        padding: 5px;
        min-width: 100px;
        margin: 5px;
        color: white;
        background-color: $dark;
        border-radius: 5px;
      }
      .active {
        background-color: $darkred;
      }
    }
  }
}
</style>