<template>
  <router-link :to="link">
  <div class="links-item">
    <div class="image-container">
      <img :src="image" :alt="name">
    </div>
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
  margin: 0;
  background-color: #F9F8F8;
  height: 98px;
  color: #274C5B;
  border-radius: 0 0 30px 30px;
  padding-left: 20px;
}

.details p {
  width: 100%;
  text-align: left;
}

.image-container {
  border-radius: 30px 30px 0 0;
  overflow: hidden;
}

img {
  width: 100%;
  height: 100%;
  scale: 1;
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