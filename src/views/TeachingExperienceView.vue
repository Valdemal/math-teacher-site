<template>
  <TheBanner>Педагогический опыт</TheBanner>
  <ContentSection>
    <FileDownloadComponent
        :href="experience1" download="АПО Семенова Т.Д. 2023.doc"
        annotation="Формирование учебно-познавательной компетенции на уроках математики посредством системно - деятельностного подхода"
    />
  </ContentSection>
</template>

<script setup>
import TheBanner from "@/components/TheBanner.vue";
import ContentSection from "@/components/ContentSection.vue";
import FileDownloadComponent from "@/components/FileDownloadComponent.vue";

import experience1 from "@/assets/files/experience1.doc";
</script>
