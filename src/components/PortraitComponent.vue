<template>
  <div class="portrait-container" ref="container">
    <img src="../assets/images/portrait.jpg" alt="Семёнова Татьяна Даниловна" ref="image">
  </div>
</template>

<style scoped>
.portrait-container {
  max-width: 40%;
  overflow: hidden;
}

</style>

<script>
export default {
  mounted() {
    this.resizePortrait();
    window.addEventListener('resize', this.resizePortrait)
  },
  methods: {
    resizePortrait() {
      let container = this.$refs.container
      let image = this.$refs.image

      let offset = (image.clientWidth - container.clientWidth) / 2;
      image.style.transform = `translate(-${offset}px, -75px)`
    }
  }
}
</script>