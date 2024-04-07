<template>
  <page-section>
    <template #heading>Портфолио</template>
    <template #content>
      <links-container>
        <PortfolioLink name="Результаты учеников" link="/students-results#start" :image="studentsResultsImage"/>
        <PortfolioLink name="Достижения учащихся" link="/students-achievements#start" :image="studentsAchievementsImage"/>
        <PortfolioLink name="Педагогический опыт" link="/teaching-experience#start" :image="teachingExperienceImage"/>
      </links-container>
    </template>
  </page-section>
</template>
<script setup>
import PageSection from "@/components/PageSection.vue";
import LinksContainer from "@/components/LinksContainer.vue";
import PortfolioLink from "@/components/PortfolioLink.vue";

import studentsResultsImage from "@/assets/images/students-results.svg"
import studentsAchievementsImage from "@/assets/images/students-achievements.svg"
import teachingExperienceImage from "@/assets/images/teaching-experience.svg"
</script>