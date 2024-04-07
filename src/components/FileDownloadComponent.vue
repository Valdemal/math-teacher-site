<script>
import CentralContainer from "@/components/CentralContainer.vue";

export default {
  components: {CentralContainer},
  props: ['href', 'download', 'annotation']
}
</script>

<template>
  <a :href="href" :download="download">
    <div class="file-wrapper">
      <div class="image-container">
        <img src="../assets/images/dowload-file.svg" alt="Картинка скачивания файла">
      </div>
      <central-container class="annotation">
        <p>{{ annotation }}</p>
      </central-container>
    </div>
  </a>
</template>

<style scoped>

.file-wrapper {
  border: 4px solid #68A47F;
  margin: 10px 0 25px 0;
  padding: 5px;
  display: flex;
}

.annotation {
  padding: 10px;
  color: #274C5B;
  background-color: #F9F8F8;
  width: 80%;
}

.image-container {
  width: 20%;
}

img {
  width: 100%;
}

</style>