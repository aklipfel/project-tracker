<template>
  <div id="hierarchy">
    <div
      v-if="showBar"
      @click="toggleBar"
      :class="{ opened: showBar }"
      class="toggle-bar"
    >
      <i class="fas fa-chevron-left"></i>
    </div>
    <div
      v-else
      @click="toggleBar"
      :class="{ opened: showBar }"
      class="toggle-bar"
    >
      <i class="fas fa-chevron-right"></i>
    </div>

    <div v-if="showBar" class="hierarchy">
      <h1
        @click="setSelected(project)"
        :class="{ active: selected.id == project.id }"
      >
        {{ project.name }}
      </h1>
      <h2>Modules</h2>
      <div class="modules">
        <h3
          v-for="mod in modules"
          :key="mod.id"
          @click="setSelected(mod)"
          :class="{ active: selected.id == mod.id }"
        >
          {{ mod.name }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hierarchy",
  data() {
    return {
      showBar: true,
      project: { id: 0, name: "Mon Projet" },
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
  props: {
    sendSelected: { types: Function },
    selected: { types: Object },
  },
  methods: {
    toggleBar() {
      this.showBar = !this.showBar;
    },
    setSelected(val) {
      this.sendSelected(val);
    },
  },
};
</script>


<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.toggle-bar {
  height: 30px;
  width: 30px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  position: absolute;
  font-size: 18px;
  background-color: $dark;
  i {
    color: $lightgrey;
  }
}
.opened {
  background-color: $lightgrey;
  position: absolute;
  left: 21vw;
  i {
    color: $dark;
  }
}

.hierarchy {
  margin-left: 1px;
  padding: 10px;
  height: 100vh;
  width: 15vw;
  background-color: $darkgrey;

  .active {
    color: $lightred !important;
  }

  h1 {
    font-size: 1.7vw;
    padding: 15px;
    color: white;
  }
  h2 {
    font-size: 1.5vw;

    margin: 0px;
    padding: 15px;
  }
  .modules {
    margin-left: 30px;
    border-left: 1px solid $lightgrey;

    h3 {
      text-align: left;
      margin-left: 10px;
      color: white;
      margin-top: 15px;
      font-size:1.3vw;
    }
  }
}
</style>