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
        <Versioning :branch="selected.branch"/>
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
import { mapState } from "vuex";

export default {
  name: "Tasks",
  components: { TasksList, Versioning, Hierarchy, ScrumTable, TopBar },
  data() {
    return {
      toggleProject: true,
      scrumTable: true,
      selected: {},
    };
  },
  created() {
    this.selected = this.project;
    if (this.selected.id == this.project.id)
      this.selected.tasks = this.sortModules();
  },
  computed: {
    ...mapState(["project", "mods"]),
  },
  methods: {
    setSelected(val) {
      this.selected = val;
    },
    switchView() {
      this.scrumTable = !this.scrumTable;
    },
    sortModules() {
      let todo = this.mods.filter((m) => m.state == "todo");
      let doing = this.mods.filter((m) => m.state == "doing");
      let done = this.mods.filter((m) => m.state == "done");

      return {
        todo,
        doing,
        done,
      };
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