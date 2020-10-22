<template>
  <div class="chatbox grey-container">
    <div class="messages">
      <div
        v-for="message in messages"
        :key="message.id"
        class="message"
        :class="{ messagesent: message.sent, messagereceived: !message.sent }"
      >
        <p class="message-text">
          {{ message.text }}
          <span>{{ message.date.format("LT") }}</span>
        </p>
      </div>
    </div>
    <div class="message-input">
      <input type="text" />
      <i class="fas fa-arrow-right fa-2x" />
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "ChatBox",
  data() {
    return {
      messages: [],
    };
  },

  mounted() {
    //To be updated with firebase realtime database
    this.messages = [
      {
        id: 1,
        sent: true,
        text: "Hello, je suis prêt à démarrer le module",
        date: moment(),
      },
      { id: 2, sent: false, text: "Ok c'est parti", date: moment() },
      { id: 4, sent: false, text: "Noice", date: moment() },
      { id: 5, sent: true, text: "Noice", date: moment() },
      { id: 6, sent: false, text: "Noice", date: moment() },
      { id: 7, sent: true, text: "Noice", date: moment() },
      { id: 8, sent: false, text: "Noice", date: moment() },
    ];
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

.chatbox {
  flex-grow: 1;
  max-width: 40%;

  .messages::-webkit-scrollbar {
    display: none;
  }
  .messages {
    display: flex;
    flex-direction: column;
    text-align: left;
    overflow: scroll;
    height: 90%;
    border-radius: 5px;
    padding: 10px;
    background-color: $dark;
    margin-bottom: 2vh;

    p {
      margin: 0;
      max-width: 50%;
      padding: 5px;
    }

    span {
      font-size: 1vw;
      position: absolute;
      width: 3.9vw;
      bottom: -15px;
    }

    .messagereceived {
      margin: 10px 0px;
      .message-text {
        position: relative;
        float: left;
        background-color: $darkred;
        border-radius: 10px 10px 10px 0px;
        span {
          left: 0;
        }
      }
    }

    .messagesent {
      margin: 10px 0px;
      .message-text {
        position: relative;
        float: right;
        background-color: $darkgrey;
        border-radius: 10px 10px 0px 10px;

        span {
          right: 0;
        }
      }
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