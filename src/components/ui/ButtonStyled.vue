<template>
  <button class="button-purple">{{ buttonText }}</button>
</template>

<script>
export default {
  name: "ButtonStyled",
  props: {
    text: {
      type: String,
    },
    isPurple: {
      type: Boolean,
      default: false,
    },
    isSmall: {
      type: Boolean,
      default: false,
    },
    isAdd: {
      type: Boolean,
      default: false,
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
    isDelete: {
      type: Boolean,
      default: false,
    },
    isSearch: {
      type: Boolean,
      default: false,
    },
    isNotification: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      buttonText: this.text,
    };
  },
};
</script>

<style scoped>
.button {
}
</style>
