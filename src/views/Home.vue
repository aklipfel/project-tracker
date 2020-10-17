<template>
  <div id="home">
    <TopBar title="Mon Projet">
      <!-- <button class="accept">VALIDER</button>
      <button class="red">REFUSER</button> -->
      <button class="red">
        <i class="fas fa-arrow-down"></i>CAHIER DES CHARGES
      </button>
      <button class="red"><i class="fas fa-arrow-down"></i>DEVIS</button>
    </TopBar>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";
export default {
  name: "Home",
  components: {
    TopBar,
  },
};
</script>

<style lang="scss">
</style>  


