<template>
  <div v-if="task.done" class="task green" :style="taskWidth(task.days)">{{ task.name }}</div>
  <div v-else class="task red" :style="taskWidth(task.days)">{{ task.name }}</div>
</template>


<script>
export default {
  name: "GanttTask",
  props: {
    task: { type: Object },
    nbJours: { types: Number },
    daysBefore: { types: Number },
  },
  methods: {
    taskWidth(length) {
      return {
        width: `${42 * length}px`,
        left: `${42 * this.task.daysBefore}px`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
.task {
  position: relative;
  height: 40px;
  margin-top: 1px;
  background-color: $darkred;
  display: flex;
  justify-content: center;
  align-items: center;
}

.green{
  background-color:$green;
}

.red{
  background-color:$darkred;
}
</style>