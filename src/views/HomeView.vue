<script>
export default {
  data() {
    return {
      a: 1,
    };
  },
  methods: {
    counter() {
      this.a += 1;
    },
  },
};
</script>

<script setup>
import { ref } from "vue";

let b = ref(1);
const counterA = () => (b.value += 1);
</script>

<template>
  <main class="main">
    {{ a }}
    <button @click="counterA">Add one to A</button>
  </main>
</template>

<style scoped>
.main{
  background-color: #F5F7FB;
  height: 100vh;
}
</style>