<template>
  <div class="grey-container tile" :class="{ done: done }">
    <div class="left">
      <slot></slot>

      <div class="infos">
        <h3 :class="{ nameonly: !task.descr }">{{ task.name }}</h3>
        <p v-if="task.descr" class="descr">{{ task.descr }}</p>
      </div>
    </div>

    <p class="livraison">
      Livraison prévue le<br />{{ task.delivery.format("DD/MM/YYYY") }}
    </p>
  </div>
</template>

<script>
export default {
  name: "TaskTile",
  props: {
    task: { types: Object },
    done: { types: Boolean },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
.done {
  background-color: $darkred;
}
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
    justify-content: space-between;
    align-items: center;

    .state {
      font-size: 1.4vw;
      font-weight: 100;
      border-radius: 50px;
      background-color: $lightred;
      padding: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding:10px;
    }

    .done {
      background-color: $green;
    }

    .todo {
      background-color: $darkred;
      
    }

    .checked {
      background-color: $green;
    }

    .infos {
      max-width: 32vw;
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