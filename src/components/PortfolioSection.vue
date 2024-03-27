<template>
  <page-section>
    <template #heading>Портфолио</template>
    <template #content>
      <links-container>
        <PortfolioLink name="Результаты учеников" link="students-results"
                       image="/src/assets/images/students-results.svg"/>
        <PortfolioLink name="Достижения учащихся" link="students-achievements"
                       image="/src/assets/images/students-achievements.svg"/>
        <PortfolioLink name="Педагогический опыт" link="teaching-experience"
                       image="/src/assets/images/teaching-experience.svg"/>
      </links-container>
    </template>
  </page-section>
</template>
<script setup>
import PageSection from "@/components/PageSection.vue";
import LinksContainer from "@/components/LinksContainer.vue";
import PortfolioLink from "@/components/PortfolioLink.vue";
</script>