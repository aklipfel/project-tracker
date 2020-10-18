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
import GanttTask from "@/components/GanttTask";

export default {
  name: "Gantt",
  data() {
    return {
      today: 13,
      tasks: [
        { name: "Test", days: 5, daysBefore: 0, done: true },
        { name: "Test", days: 2, daysBefore: 5 },
        { name: "Test", days: 3, daysBefore: 7 },
        { name: "Test", days: 6, daysBefore: 10 },
      ],
    };
  },
  components: { GanttTask },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

#gantt {
  width: 90%;
  height: 30%;

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