<template>
  <div class="container" ref="container">
    <div class="slider" ref="slider">
      <div class="title" ref="title">
        <p>Учитель математики в ОГБОУ "Борисовской СОШ"</p>
        <h2>
          Семенова<br/>
          Татьяна<br/>
          Даниловна
        </h2>
      </div>
      <span class="text">
        <p>
        Работаю учителем математики 35 лет, учу математику - 50, и она мне до сих пор не надоела и  продолжает открываться с разных сторон.
        </p>
        <p>
        Моё педагогическое кредо - "Дорогу осилит идущий, а математику - мыслящий".
        </p>
        <p>
        Только любить математику мало, нужно ещё  влюбить в неё  своих учеников. И тогда они свернут горы, добьются спеха и приведут к тебе уже своих детей.
        </p>
        <p>
        Среди моих выпускников уже есть молодые учёные. Горжусь своими учениками и, надеюсь, что это взаимно!
        </p>
        </span>
    </div>
  </div>
</template>

<style scoped>

h2 {
  font-size: 96px;
  margin-top: 0;
}

.title p {
  color: #68A47F;
  font: italic 40px VivaldiD cl, r, sans-serif;
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
  font-size: 34px;
  text-align: justify;
}

.text p {
  text-indent: 25px;
  margin: 0;
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