<script>
export default {
  data() {
    return {
      msg: "Hello Vue.js!",
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

let msgA = ref(1);
const counterA = () => (msgA.value += 1);
</script>

<template>
  <main>
    {{ msgA }}
    {{ a }}
    <button @click="counterA">Add one to A</button>
  </main>
</template>
