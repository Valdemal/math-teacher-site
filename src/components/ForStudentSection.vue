<template>
  <page-section class="container">
    <template #heading>Ученикам</template>
    <template #content>
      <links-container>
        <for-student-link name="Подготовка к ЕГЭ" link="ege-preparation" image="/src/assets/images/ege.png"/>
        <for-student-link name="Подготовка к ОГЭ" link="oge-preparation" image="/src/assets/images/oge.png"/>
        <for-student-link name="Подготовка к конкурсам" link="competitions-preparation"
                          image="/src/assets/images/competitions.png"/>
      </links-container>
    </template>
  </page-section>
</template>

<style scoped>
.container {
  background-color: #274C5B;
  color: #FFFFFF;
}
</style>
<script setup>
import PageSection from "@/components/PageSection.vue";
import LinksContainer from "@/components/LinksContainer.vue";
import ForStudentLink from "@/components/ForStudentLink.vue";
</script>