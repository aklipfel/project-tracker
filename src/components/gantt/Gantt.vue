<template>
  <div id="gantt" class="grey-container">
    <div class="repere">
      <div
        v-for="index in 31"
        :key="index"
        v-bind:class="{ today: today == index }"
        class="line"
      >
        <div class="date">
          <span>{{ index }}</span>
        </div>
      </div>
      <div class="tasks">
        <GanttTask
          v-for="(task, index) in tasks"
          v-bind:key="index"
          :task="task"
        />
      </div>
    </div>
  </div>
</template>


<script>
import GanttTask from "@/components/gantt/GanttTask";
import {mapState} from 'vuex'

export default {
  name: "Gantt",
  data() {
    return {
      today: 13,
      tasks: [],
    };
  },
  created() {
    
    this.tasks = this.createGanttTasks();
  },
  components: { GanttTask },
  computed: { ...mapState(["mods"]) },
  methods: {
    createGanttTasks(){
      let day_count = 0;
      let tasks = []
      this.mods.forEach((mod) => {
        let diff = mod.delivery.diff(mod.start,'days')
        tasks.push({name:mod.name, days:diff, daysBefore:day_count, done: (mod.state == "done")});
        day_count += diff
      })

      return tasks;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

#gantt {
  width: 90%;
  height: 30vh;

  font-size:1rem;

  .repere::-webkit-scrollbar {
    display: none;
  }
  .repere {
    height: 100%;
    width: 100%;
    display: flex;
    position: relative;
    overflow: scroll;

    .line {
      height: 95%;
      border: 1px solid white;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      min-width: 40px;
    }

    .today {
      color: $lightred;
      background-color: rgba($lightred, 0.2);
    }

    .tasks {
      position: absolute;
    }
  }
}
</style>