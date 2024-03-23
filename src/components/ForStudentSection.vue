<template>
  <page-section class="container">
    <template #heading>Ученикам</template>
    <template #content>
      <LinksContainer/>
    </template>
  </page-section>
</template>

<style scoped>
.container {
  background-color: #274C5B;
  color: #FFFFFF;
}
</style>
<script setup>
import PageSection from "@/components/PageSection.vue";
import LinksContainer from "@/components/LinksContainer.vue";
</script>