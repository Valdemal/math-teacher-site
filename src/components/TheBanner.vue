<template>
  <div class="container">
    <img src="../assets/images/banner.jpeg" alt="баннер">
    <central-container>
      <h2><slot></slot></h2>
    </central-container>
  </div>
</template>
<style scoped>
.container {
  height: 450px;
  position: relative;
  overflow: hidden;
  border-top: #274C5B solid 2px;
  border-bottom: #274C5B solid 2px;
}

img {
  position: absolute;
  height: 100%;
}

h2 {
  color: #F5F5F7;
  font-size: 70px;
  text-shadow: #274C5B 5px 0 8px;
}

</style>
<script setup>
import CentralContainer from "@/components/CentralContainer.vue";
</script>