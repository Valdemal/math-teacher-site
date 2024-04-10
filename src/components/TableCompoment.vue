<script setup>

</script>

<template>
  <table>
    <slot></slot>
  </table>
</template>

<style>
table {
  font-size: 26px;
  background-color: #F9F8F8;
  border: 3px solid #68A47F;
  border-spacing:0;
}

table tr {
  border: 3px solid #68A47F;
  padding: 5px;
}
table td {
  border: 3px solid #68A47F;
  padding: 5px;
}
</style>
