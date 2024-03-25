<template>
  <CentralContainer class="subheader">
    <div class="subheader-inner">
      <h2>Сайт учителя математики</h2>
      <CentralContainer>
        <div class="links">
          <router-link to="/#main-section">Главная</router-link>
          <router-link to="/#portfolio-section">Портфолио</router-link>
          <router-link to="/#for-student-section">Ученикам</router-link>
        </div>
      </CentralContainer>
    </div>
  </CentralContainer>
</template>

<style scoped>

.subheader {
  padding:  69px 162px 69px 260px;
}

h2 {
  font-size: 38px;
}

.subheader-inner {
  width: 100%;
  justify-content: space-between;
  display: flex;
}

.links {
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;
}

.links a {
  padding: 0 20px 0 20px;
}

.links a:hover {
  color: #EFD372;
}

footer .subheader {
  background-color: #274C5B;
  color: #FFFFFF;
}

footer .subheader a {
  color: #FFFFFF;
}
</style>
<script setup>
import CentralContainer from "@/components/CentralContainer.vue";
</script>