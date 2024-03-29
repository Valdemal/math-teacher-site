<template>
  <section>
    <CentralContainer class="container">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <div>
        <slot name="content"></slot>
      </div>
    </CentralContainer>
  </section>
</template>

<style scoped>

.container {
  padding: 70px 120px;
}

h3 {
  font-size: 50px;
  margin-top: 0;
}

</style>
<script setup>
import CentralContainer from "@/components/CentralContainer.vue";
</script>