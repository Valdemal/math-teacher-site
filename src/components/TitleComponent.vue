<template>
  <div class="container" ref="container">
    <div class="slider" ref="slider">
        <span ref="span">
          <p>Учитель математики в Борисовской СОШ №1</p>
          <h2>
            Семенова<br/>
            Татьяна<br/>
            Даниловна
          </h2>
        </span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deleniti, dolor dolorem dolores error eum ex itaque iure molestias officia quaerat quos totam voluptas! Beatae fugit hic maiores nihil voluptate!
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
}

.slider {
  display: flex;
  flex-direction: column;
  width: max-content;
  position: absolute;
  top: 0;
  pointer-events: none;
  transition: 0.75s cubic-bezier(0.5, -0.6, 0.2, 1.6);
}


</style>
<script>

  export default {
    mounted() {
      let container = this.$refs.container;
      let span = this.$refs.span;
      let slider = this.$refs.slider;

      container.style.width = span.clientWidth + 'px';
      container.style.height = span.clientHeight + 'px';

      container.onmouseover = () => {
        slider.style.top = "-" + span.clientHeight + 'px';
      }

      container.onmouseout = () => {
        slider.style.top = '0px'
      }
    }
  }
</script>