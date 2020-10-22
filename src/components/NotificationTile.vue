<template>
  <div class="notif-tile grey-container">
    <p>{{ text }}</p>
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
  margin: 10px;

  p {
    margin: 5px;
  }
}
</style>