<template>
  <div class="subheader">
    <div class="subheader-inner">
      <h2>Сайт учителя математики</h2>
      <div class="links">
        <div class="links-inner">
          <a href="#">Главная</a>
          <a href="#">Портфолио</a>
          <a href="#">Ученикам</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.subheader {
  display: flex;
  padding:  69px 162px 69px 260px;
}

.subheader h2 {
  font-size: 38px;
}

.subheader-inner {
  width: 100%;
  justify-content: space-between;
  margin: auto;
  display: flex;
}

.links {
  display: flex;
}

.links-inner {
  display: flex;
  justify-content: space-between;
  margin: auto;
  font-size: 20px;
  font-weight: bold;
}

.links-inner a {
  padding: 0 20px 0 20px;
}

.links-inner a:hover {
  color: #EFD372;
}

footer .subheader {
  background-color: #274C5B;
  color: #FFFFFF;
}

footer .subheader a {
  color: #FFFFFF;
}
</style>