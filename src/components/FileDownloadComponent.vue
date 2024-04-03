<script>
import CentralContainer from "@/components/CentralContainer.vue";

export default {
  components: {CentralContainer},
  props: ['href', 'download', 'annotation']
}
</script>

<template>
  <a :href="href" :download="download">
    <div>{{ annotation }}</div>
  </a>
</template>

<style scoped>

</style>