<template>
  <page-section>
    <template #heading>Портфолио</template>
    <template #content>
      <links-container>
        <PortfolioLink name="Результаты учеников" image="/src/assets/img.png"/>
        <PortfolioLink name="Достижения учащихся" image="/src/assets/img.png"/>
        <PortfolioLink name="Педагогический опыт" image="/src/assets/img.png"/>
      </links-container>
    </template>
  </page-section>
</template>
<script setup>
import PageSection from "@/components/PageSection.vue";
import LinksContainer from "@/components/LinksContainer.vue";
import PortfolioLink from "@/components/PortfolioLink.vue";
</script>