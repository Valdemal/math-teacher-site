<template>
  <TheBanner>Подготовка к конкурсам</TheBanner>
  <ContentSection>
    <FileDownloadComponent :href="competitionsTaskFile" download="Задача для конкурса.docx"
                           annotation="Задача для конкурса"/>
    <FileDownloadComponent :href="belgorodLiversFile" download="для конкурса  Мы - Белгородцы.docx"
                           :annotation='`Для конкурса  "Мы - Белгородцы!"`' />
  </ContentSection>
</template>

<script setup>
import TheBanner from "@/components/TheBanner.vue";
import ContentSection from "@/components/ContentSection.vue";

import belgorodLiversFile from "@/assets/files/we_are_belgorod_livers.docx"
import competitionsTaskFile from "@/assets/files/task_for_competitions.docx"
import FileDownloadComponent from "@/components/FileDownloadComponent.vue";
</script>