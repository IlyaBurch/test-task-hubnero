<template>
  <div class="side">
    <SideButton v-bind:logo="true" class="side__logo" custom />
    
    <router-link to="/tools" v-slot="{ isActive, navigate }" custom>
      <a @click="navigate">
        <SideButton
          v-bind:tools="true"
          :isClicked="isActive"
          class="side__el"
          custom
        />
      </a>
    </router-link>

    <router-link to="/chart" v-slot="{ isActive, navigate }" custom>
      <a @click="navigate">
        <SideButton
          v-bind:chart="true"
          :isClicked="isActive"
          class="side__el"
          custom
        />
      </a>
    </router-link>

    <router-link to="/wallet" v-slot="{ isActive, navigate }" custom>
      <a @click="navigate">
        <SideButton
          v-bind:wallet="true"
          :isClicked="isActive"
          class="side__el"
        />
      </a>
    </router-link>

    <router-link to="/attachment" v-slot="{ isActive, navigate }" custom>
      <a @click="navigate">
        <SideButton
          v-bind:attachment="true"
          :isClicked="isActive"
          class="side__el"
        />
      </a>
    </router-link>

    <router-link to="/document" v-slot="{ isActive, navigate }" custom>
      <a @click="navigate">
        <SideButton
          v-bind:document="true"
          :isClicked="isActive"
          class="side__el"
        />
      </a>
    </router-link>

    <router-link to="/ticket" v-slot="{ isActive, navigate }" custom>
      <a @click="navigate">
        <SideButton
          v-bind:ticket="true"
          :isClicked="isActive"
          class="side__el"
        />
      </a>
    </router-link>

    <router-link to="/settings" v-slot="{ isActive, navigate }" custom>
      <a @click="navigate">
        <SideButton
          v-bind:settings="true"
          :isClicked="isActive"
          class="side__el"
        />
      </a>
    </router-link>

    <router-link to="/product-chart" v-slot="{ isActive, navigate }" custom>
      <a @click="navigate">
        <SideButton
          v-bind:product-chart="true"
          :isClicked="isActive"
          class="side__el"
        />
      </a>
    </router-link>

    <router-link to="/users" v-slot="{ isActive, navigate }" custom>
      <a @click="navigate">
        <SideButton
          v-bind:users="true"
          :isClicked="isActive"
          class="side__el"
        />
      </a>
    </router-link>
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

.side__logo {
  margin-top: 28px;
  margin-bottom: 28px;
}

.side__el {
  margin: 12px 24px 12px 24px;
  position: relative;
}
</style>
