<template>
  <router-link :to="{name: link}">
  <div class="links-item">
    <central-container class="image-container">
      <img :src="image" :alt="name">
    </central-container>
    <central-container class="details">
      <p>{{ name }}</p>
    </central-container>
  </div>
  </router-link>
</template>

<style scoped>

.links-item {
  display: inline-grid;
  margin: 10px;
  cursor: pointer;
}

.details {
  font-size: 25px;
  font-weight: bold;

  height: 90px;
}

p {
  text-align: left;
  margin: 0;
}

.image-container {
  border-radius: 30px;
  overflow: hidden;
  background-color: #274C5B;
}

img {
  width: 100%;
  height: 100%;
  transition: 0.5s ease-out;
}

.links-item:hover img {
  scale: 110%;
}
</style>

<script>

import CentralContainer from "@/components/CentralContainer.vue";

export default {
  components: {CentralContainer},
  props: ['name', 'image', 'link']
}

</script>