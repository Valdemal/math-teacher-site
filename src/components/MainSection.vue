<template>
  <div class="container">
    <div class="text-container">
      <p>Учитель математики в Борисовской СОШ №1</p>
      <h2>
        Семенова<br/>
        Татьяна<br/>
        Даниловна
      </h2>
    </div>
    <portrait-component/>
  </div>
</template>
<style scoped>
.container {
  height: 900px;
  background-color: #F1EFF0;
  display: flex;
}

.text-container {
  margin: auto auto auto 120px;
}

h2 {
  font-size: 96px;
  margin-top: 0;
}

p {
  color: #68A47F;
  font: italic 40px VivaldiD, sans-serif;
  margin-bottom: 5px;
}

</style>
<script setup>
import PortraitComponent from "@/components/PortraitComponent.vue";
</script>