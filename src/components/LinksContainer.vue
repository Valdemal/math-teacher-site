<template>
  <div class="links-container">
    <slot></slot>
  </div>
</template>

<style scoped>
.links-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>