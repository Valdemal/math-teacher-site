<template>
  <div class="links-item">
    <img :src="image" :alt="name">
    <p>{{ name }}</p>
  </div>
</template>

<style scoped>
.links-item {
  margin: 10px;
  cursor: pointer;
}

p {
  text-align: left;
  font-size: 25px;
  font-weight: bold;
  margin: 0;
}

img {
  width: 100%;
  border-radius: 30px;
}
</style>

<script>

export default {
  props: ['name', 'image']
}

</script>