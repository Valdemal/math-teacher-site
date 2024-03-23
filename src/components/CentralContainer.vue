<script setup>

</script>

<template>
  <div class="container">
    <div class="inner">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}

.inner {
  margin: auto;
  width: 100%;
  text-align: center;
}
</style>