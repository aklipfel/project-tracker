<template>
  <div class="updates">
    <TopBar title="Mise à jour : Design v0.1">
      <!-- <button class="accept">VALIDER</button>
      <button class="red">REFUSER</button> -->
      <button class="accept"><i class="fas fa-check fa-lg"></i>ACCEPTER</button>
      <button class="red"><i class="fas fa-times fa-lg"></i>REFUSER</button>
    </TopBar>
  </div>
</template>


<script>
import TopBar from '@/components/TopBar'
export default {
  name:"Updates",
  components : {
    TopBar
  }
}
</script>
