<template>
  <div id="communications">
    <TopBar title="Communications" />
    <div class="content">
      <div class="tasks">
        <h2>Dernières avancées</h2>
        <NotificationTile
          v-for="notif in notifications"
          :key="notif.id"
          :text="notif.text"
        />
      </div>
      <ChatBox />
    </div>
  </div>
</template>


<script>
import NotificationTile from "@/components/NotificationTile";
import TopBar from "@/components/TopBar";
import ChatBox from "@/components/ChatBox";
export default {
  name: "Communications",
  components: {
    TopBar,
    NotificationTile,
    ChatBox,
  },
  data() {
    return {
      notifications: [],
    };
  },
  mounted() {
    //will be a firestore call to the comments collection
    this.notifications = [
      {
        id: 1,
        text: "Début de développement du module Auth",
      },
      {
        id: 2,
        text: "Développement de la page de login pour le module Auth",
      },
      {
        id: 3,
        text:
          "Fin du développement de la page de login pour le module Auth, passage en test",
      },
    ];
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";

#communications {
  padding: 20px;

  .tasks {
    width: 60%;
  }
}
</style>
