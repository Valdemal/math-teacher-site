<template>
  <div class="container" ref="container">
    <div class="slider" ref="slider">
        <div class="title" ref="title">
          <p>Учитель математики в Борисовской СОШ №1</p>
          <h2>
            Семенова<br/>
            Татьяна<br/>
            Даниловна
          </h2>
        </div>
        <span class="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi distinctio officiis quia, ratione repellat repudiandae tempora vitae voluptas! Amet autem consequatur, doloremque id in nemo omnis reiciendis tempore tenetur ullam?
        </span>
    </div>
  </div>
</template>

<style scoped>

h2 {
  font-size: 96px;
  margin-top: 0;
}

p {
  color: #68A47F;
  font: italic 40px VivaldiD, sans-serif;
  margin-bottom: 5px;
}

.container {
  cursor: pointer;
  position: relative;
  overflow: hidden;
  max-width: 50%;
  min-width: 50%;
}

.slider {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  pointer-events: none;
  transition: 0.75s cubic-bezier(0.5, -0.6, 0.2, 1.6);
  padding-right: 30px;
}

.text {
  font-size: 36px;
  text-align: justify;
}


</style>
<script>

  import PageSection from "@/components/PageSection.vue";

  export default {
    components: {PageSection},
    mounted() {

      let container = this.$refs.container;
      let title = this.$refs.title;
      let slider = this.$refs.slider;

      this.resize();
      window.addEventListener('resize', this.resize)

      container.onmouseover = () => {
        slider.style.top = "-" + title.clientHeight + 'px';
      }

      container.onmouseout = () => {
        slider.style.top = '0px'
      }
    },
    methods: {
      resize() {
        let container = this.$refs.container;
        let title = this.$refs.title;

        container.style.width = title.clientWidth + 'px';
        container.style.height = title.clientHeight + 'px';
      }
    }
  }
</script>