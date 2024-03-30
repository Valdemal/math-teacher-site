<template>
  <section>
    <title-component class="title-component"/>
    <portrait-component/>
  </section>
</template>
<style scoped>
section {
  height: 900px;
  background-color: #F1EFF0;
  display: flex;
}

.title-component {
  margin: auto auto auto 120px;
}
</style>
<script setup>
import PortraitComponent from "@/components/PortraitComponent.vue";
import TitleComponent from "@/components/TitleComponent.vue";
</script>