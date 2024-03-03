<script>
import SideWidget from "./components/sidemenu/SideWidget.vue";
import TheHeader from "./components/header/TheHeader.vue";

export default {
  components: {
    SideWidget,
    TheHeader,
  },
};
</script>

<template>
  <div id="app">
    <div class="wrapper">
      <SideWidget class="sidebar" />
      <div class="main-window">
        <TheHeader />
        <router-view />
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 72px auto;
  height: 100%;
}

.sidebar {
  position: sticky;
  top: 0;
}
</style>
