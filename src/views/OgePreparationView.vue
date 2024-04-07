<template>
  <TheBanner id="start">Подготовка к ОГЭ</TheBanner>
  <ContentSection>
    <FileDownloadComponent :href="task1" download="колёса.docx" annotation='"Колеса"'/>
    <FileDownloadComponent :href="task2" download="листы_бумаги.docx" annotation='"Листы бумаги"'/>
    <FileDownloadComponent :href="task3" download="печь_для_бани.docx" annotation='"Печь для бани"'/>
    <FileDownloadComponent :href="task4" download="тарифы.docx" annotation='"Тарифы"'/>
    <FileDownloadComponent :href="task5" download="участок.docx" annotation='"Участок"'/>
  </ContentSection>
</template>
<script setup>
import TheBanner from "@/components/TheBanner.vue";
import ContentSection from "@/components/ContentSection.vue";
import FileDownloadComponent from "@/components/FileDownloadComponent.vue";
import task1 from "@/assets/files/oge/task1.docx"
import task2 from "@/assets/files/oge/task2.docx"
import task3 from "@/assets/files/oge/task3.docx"
import task4 from "@/assets/files/oge/task4.docx"
import task5 from "@/assets/files/oge/task5.docx"
</script>
