<template>
  <div class="container">
    <img src="../assets/banner-slides-image.jpeg" alt="баннер">
    <central-container>
      <h2><slot></slot></h2>
    </central-container>
  </div>
</template>
<style scoped>
.container {
  height: 450px;
  position: relative;
}

img {
  position: absolute;
  height: 100%;
  width: 100%;
}

h2 {
  font-size: 70px;
}

</style>
<script setup>
import CentralContainer from "@/components/CentralContainer.vue";
</script>