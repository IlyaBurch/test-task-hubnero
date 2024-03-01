<template>
  <div class="side">
    <router-link to="/" v-slot="{ isActive }">
      <SideButton v-bind:logo="true" :isClicked="isActive" class="side__logo" custom/>
    </router-link>
    <router-link to="/test" v-slot="{ isActive }">
      <SideButton v-bind:tools="true" :isClicked="isActive" class="side__el" custom/>
    </router-link>
    <SideButton v-bind:chart="true" class="side__el" />
    <SideButton v-bind:wallet="true" class="side__el" />
    <SideButton v-bind:attachment="true" class="side__el" />
    <SideButton v-bind:document="true" class="side__el" />
    <SideButton v-bind:ticket="true" class="side__el" />
    <SideButton v-bind:settings="true" class="side__el" />
    <SideButton v-bind:product-chart="true" class="side__el" />
    <SideButton v-bind:users="true" class="side__el" />
  </div>
</template>

<script>
// import ButtonStyled from "../ui/ButtonStyled.vue";
import SideButton from "../ui/SideButton.vue";

export default {
  name: "SideWidget",
  components: {
    // ButtonStyled,
    SideButton,
  },
};
</script>

<style scoped>
.side {
  width: 72px;
  height: 100vh;
  background-color: FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.side__logo{
  margin-top: 28px;
  margin-bottom: 28px;
}

.side__el{
  margin: 12px 24px 12px 24px;
}
</style>
