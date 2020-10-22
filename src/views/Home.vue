<template>
  <div id="home">
    <TopBar :title="project.name" :delivery="project.delivery">
      <!-- <button class="accept">VALIDER</button>
      <button class="red">REFUSER</button> -->
      <button class="red">
        <i class="fas fa-arrow-up"></i>CAHIER DES CHARGES
      </button>
      <button class="red"><i class="fas fa-arrow-down"></i>DEVIS</button>
    </TopBar>
    <div class="content">
      <div class="left">
        <h2>Module(s) en cours de dévelopement</h2>

        <div id="tileslist">
          <TaskTile :task="mockTask"> <div class="state">DOING</div></TaskTile>
        </div>

        <h2>Diagramme de GANTT</h2>
        <Gantt />
      </div>

      <div class="right">
        <h2>Dernières mises à jour</h2>

        <TaskTile :task="mockUpdate">
          <div class="state checked"><i class="fas fa-check"></i></div
        ></TaskTile>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";
import Gantt from "@/components/gantt/Gantt";
import TaskTile from "@/components/TaskTile";
import {mapState} from "vuex"

export default {
  name: "Home",
  components: {
    TopBar,
    Gantt,
    TaskTile,
  },
  data() {
    return {
      mockTask: { id: 1, name: "Auth" },
      mockUpdate: { id: 2, name: "Intégration du design v0.1" },
    };
  },

  computed:{
    ...mapState(['project'])
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

#home {
  padding: 20px;
}
.content {
  display: flex;
  height: 80vh;
  overflow: scroll;
}

.content::-webkit-scrollbar {
  display: none;
}
.left {
  width: 60%;
}
.right {
  flex-grow: 1;
}
</style>  


