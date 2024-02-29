<script>
import SideWidget from './components/sidemenu/SideWidget.vue';

export default {
  components: {
    SideWidget,
  }
};
</script>

<template>
  <div id="app">
    <div class="wrapper">
      <SideWidget class="sidebar" />
      <div class="main-window">
        <!-- header -->
        <router-view />
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper{
  display: grid;
  grid-template-columns: 72px auto;
}
</style>
