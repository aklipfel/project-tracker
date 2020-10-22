<template>
  <div class="grey-container tile">
    <div class="left">
      <slot></slot>

      <div class="infos">
        <h3 :class="{ nameonly: !task.descr }">{{ task.name }}</h3>
        <p v-if="task.descr" class="descr">{{ task.descr }}</p>
      </div>
    </div>

    <p class="livraison">Livraison prévue le<br />{{ task.delivery.format("DD/MM/YYYY")}}</p>
  </div>
</template>

<script>
export default {
  name: "TaskTile",
  props: {
    task: { types: Object },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.tile {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;

  .left {
    display: flex;

    .state {
      font-size: 1.4vw;
      font-weight: 100;
      border-radius: 10px;
      background-color: $lightred;
      padding: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .done {
      background-color: $green;
    }

    .toddo {
      background-color: $darkred;
    }

    .checked {
      background-color: $green;
    }

    .infos {
      max-width: 35vw;
      justify-content: space-between;
      align-items: flex-start;
      text-align: left;
      margin: 0px 10px;

      .nameonly {
        text-align: center;
      }

      .descr {
        margin: 0;
        font-size: 1vw;
        max-height: 80px;
        word-wrap: none;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      h3 {
        margin-bottom: 2px;
        min-width: 150px;
      }
    }
  }

  .livraison {
    text-align: right;
    margin: 0;
    font-size: 1vw;
  }
}
</style>