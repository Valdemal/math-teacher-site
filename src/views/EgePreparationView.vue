<template>
  <TheBanner>Подготовка к ЕГЭ</TheBanner>
  <ContentSection>
    <FileDownloadComponent
        :href="trigonometricEquationsFile"
        download="Учебно_методическое_пособие_по_решению_тригонометрических_уравнений.docx"
        annotation="Учебно-методическое пособие по решению тригонометрических уравнений"
    />
    <FileDownloadComponent
      :href="functionsAndGraphicsFile"
      download="Функции_и_графики.docx"
      annotation="Функции и графики"
    />
    <FileDownloadComponent
        :href="stepAlgorithmFile"
        download="ЭОР_Пошаговый_алгоритм_решения_тригонометрических_уравнений.pdf"
        annotation="ЭОР Пошаговый алгоритм решения тригонометрических уравнений"
    />
  </ContentSection>
</template>

<script setup>
import TheBanner from "@/components/TheBanner.vue";
import ContentSection from "@/components/ContentSection.vue";
import FileDownloadComponent from "@/components/FileDownloadComponent.vue";

import trigonometricEquationsFile from "@/assets/files/trigonometric_equations.docx"
import functionsAndGraphicsFile from "@/assets/files/functions_and_graphics.docx"
import stepAlgorithmFile from "@/assets/files/step_algorithm_trigonometric_equations.pdf"

</script>
