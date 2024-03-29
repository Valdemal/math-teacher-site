<template>
  <header>
    <SubheaderComponent/>
  </header>
  <main>
    <router-view/>
  </main>
  <footer>
    <SubheaderComponent/>
  </footer>
</template>
<script setup>
import SubheaderComponent from "@/components/SubheaderComponent.vue";
</script>