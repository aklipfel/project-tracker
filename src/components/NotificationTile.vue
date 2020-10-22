<template>
  <div class="notif-tile grey-container">
    <h3>{{ text }}</h3>
  </div>
</template>

<script>
export default {
  name: "NotificationTile",
  props: { text: { types: String } },
};
</script>

<style lang="scss" scoped>
.notif-tile {
  text-align: left;
  width: 90%;
  margin: 10px 0;

  p {
    margin: 5px;
    font-size:1.7vw;
  }
}
</style>