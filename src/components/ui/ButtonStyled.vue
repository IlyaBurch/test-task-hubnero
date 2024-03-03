<template>
  <button :class="buttonClass" class="button">
    <span v-if="icon" :class="iconClass"></span>
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ButtonStyled",
  props: {
    buttonClass: {
      type: String,
    },
    icon: {
      type: String,
    },
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
  computed: {
    iconClass() {
      return [this.icon];
    },
  },
};
</script>

<style scoped>
.button {
  border: none;
  background-color: transparent;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
}

.header-button{
  display: flex;
width: 24px;
height: 24px;
justify-content: center;
align-items: center; 
}

.grey-border {
  border-radius: 8px;
  border: 1px solid #E5E8EF;
  padding: 8px 14px 8px 14px;
}

.plus {
  background-image: url(@/assets/icons/ui/Plus.svg);
}

.search {
  background-image: url(@/assets/icons/ui/search.svg);
}

.search-header{
  background-image: url(@/assets/icons/ui/search-header.svg);
}
.notification-header{
  background-image: url(@/assets/icons/ui/bell-header.svg);
}

.close {
  background-image: url(@/assets/icons/ui/Delete.svg);
}

.sort {
  background-image: url(@/assets/icons/ui/Arrow.svg);
}

.edit {
  background-image: url(@/assets/icons/ui/edit.svg);
  background-repeat: no-repeat;
}

.trash {
  background-image: url(@/assets/icons/ui/trash.svg);
}

.icon-nobackground {
  width: 20px;
  height: 20px;
}

.icon-whitebackground {
  background-color: white;
  width: 20px;
  height: 20px;
}

.dropdown {
  background-image: url(@/assets/icons/ui/Group.svg);
}

.plus-background {
  background-color: #8f20ef;
  height: 20px;
  width: 20px;
  border-radius: 6px;
  display: grid;
  place-items: center;
}
</style>
