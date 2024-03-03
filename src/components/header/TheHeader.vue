<template>
  <header class="header-wrapper">
    <div class="header-components">
      <div class="side">
        <BurgerButton class="burger" />
        <span class="view-name">Team</span>
      </div>
      <div class="side">
        <ButtonStyled icon="search-header header-button" />
        <ButtonStyled icon="notification-header header-button" class="new button--padding" />
        <div class="divider" />
        <UserMenu name="Ernest Eberly" img="src/assets/img/a6a062b047be8fcde6d4b8eafcf908df.png"/>
      </div>
    </div>
  </header>
</template>

<script>
import BurgerButton from "../ui/BurgerButton.vue";
import ButtonStyled from "../ui/ButtonStyled.vue";
import UserMenu from "./UserMenu.vue";

export default {
  components: {
    BurgerButton,
    ButtonStyled,
    UserMenu,
  },
};
</script>

<style scoped>
.view-name {
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 33px;
}

.side {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
}
.header-wrapper {
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
  padding-left: 28px;
  padding-right: 28px;
}

.header-wrapper::after{
  content: url(@/assets/icons/ui/shadow-header.svg);
  position: absolute;
  top:0;
  left: 0px;
}

.header-components{
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  height: 76px;
  width: auto;
  align-items: center;
}

.burger {
  margin-right: 28px;
}

.new {
  position: relative;
}

.new::after {
  content: url(@/assets/icons/ui/notification.svg);
  position: absolute;
  bottom: 7px;
  left: 12px;
}
.button--padding{
  margin-left: 28px;
}
.divider {
  width: 1px;
  height: 100%;
  background-color: #e5e8ef;
  margin-left: 36px;
  margin-right: 36px;
  flex: 1;
}
</style>
