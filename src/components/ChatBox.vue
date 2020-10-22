<template>
  <div class="chatbox grey-container">
    <div class="messages">
      <div class="message-received">
        Hello ! J'aime bien mais comme je dois faire un long message pour tester
        je parle pour ne rien dire dois faire un long message pour tester je
        parle pour ne rien dire dois
      </div>
      <div class="message-sent">Hello ! mince</div>
    </div>
    <div class="message-input">
      <input type="text" />
      <i class="fas fa-arrow-right fa-2x" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatBox",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.chatbox {
  flex-grow: 1;
  max-width: 40%;

  .messages {
    text-align: left;
    height: 90%;
    border-radius: 5px;
    padding: 10px;
    background-color: $dark;
    margin-bottom: 2vh;
    .message-received {
      background-color: $darkred;
      max-width: 50%;
      padding: 5px;
      border-radius: 10px 10px 10px 0px;
    }

    .message-sent {
      float: right;
      background-color: $darkgrey;
      max-width: 50%;
      padding: 5px;
      border-radius: 10px 10px 0px 10px;
    }
  }

  .message-input {
    display: flex;
    justify-content: space-between;
    align-items: center;

    input {
      width: 90%;
      border-radius: 5px;
      border: none;
      height: 3vh;
      background-color: $dark;
      color: $lightgrey;
    }

    .fa-arrow-right {
      margin-right: 10px;
      color: $lightred;
    }
  }
}
</style>