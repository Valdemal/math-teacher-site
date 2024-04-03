<template>
  <page-section class="for-students">
    <template #heading>Ученикам</template>
    <template #content>
      <links-container>
        <for-student-link name="Подготовка к ЕГЭ" link="ege-preparation" :image="egePreparationImage"/>
        <for-student-link name="Подготовка к ОГЭ" link="oge-preparation" :image="ogePreparationImage"/>
        <for-student-link name="Подготовка к конкурсам" link="competitions-preparation"
                          :image="competitionsPreparationImage"/>
      </links-container>
    </template>
  </page-section>
</template>

<style scoped>
.for-students {
  background-color: #274C5B;
  color: #FFFFFF;
}
</style>
<script setup>
import PageSection from "@/components/PageSection.vue";
import LinksContainer from "@/components/LinksContainer.vue";
import ForStudentLink from "@/components/ForStudentLink.vue";

import egePreparationImage from "@/assets/images/ege.png"
import ogePreparationImage from "@/assets/images/oge.png"
import competitionsPreparationImage from "@/assets/images/competitions.png"
</script>