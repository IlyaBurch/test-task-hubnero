<template>
  <div>
    <div class="hamburger-lines">
      <span class="line line1"></span>
      <span class="line line2"></span>
      <span class="line line3"></span>
    </div>
  </div>
</template>

<script>
export default {
  // data() {
  //   return { isActive: false };
  // },
  // methods: {
  //   toggleMenu: function () {
  //     this.isActive = !this.isActive;
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.hamburger-lines {
  display: block;
  height: 11px;
  width: 16px;
  // position: absolute;
  // top: 17px;
  // left: 20px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hamburger-lines .line {
  display: block;
  height: 1px;
  width: 100%;
  border-radius: 10px;
  background: #2A355A;
}

.hamburger-lines .line1 {
  transform-origin: 0% 0%;
  transition: transform 0.4s ease-in-out;
}

.hamburger-lines .line2 {
  transition: transform 0.2s ease-in-out;
}

.hamburger-lines .line3 {
  transform-origin: 0% 100%;
  transition: transform 0.4s ease-in-out;
}

// input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
//   transform: rotate(45deg);
// }

// input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
//   transform: scaleY(0);
// }

// input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
//   transform: rotate(-45deg);
// }
</style>
