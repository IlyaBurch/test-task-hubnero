<template>
  <div :class="{ pseudo: isClicked }">
    <button v-if="logo" class="side__button side__button--logo" />
    <button
      v-if="tools"
      :class="{ clicked: isClicked }"
      class="side__button side__button--menu side__button--tools"
    ></button>
    <button
      v-if="chart"
      :class="{ clicked: isClicked }"
      class="side__button side__button--menu side__button--chart"
    ></button>
    <button
      v-if="wallet"
      :class="{ clicked: isClicked }"
      class="side__button side__button--menu side__button--money"
    ></button>
    <button
      v-if="attachment"
      :class="{ clicked: isClicked }"
      class="side__button side__button--menu side__button--attachment"
    ></button>
    <button
      v-if="document"
      :class="{ clicked: isClicked }"
      class="side__button side__button--menu side__button--document"
    ></button>
    <button
      v-if="ticket"
      :class="{ clicked: isClicked }"
      class="side__button side__button--menu side__button--ticket"
    ></button>
    <button
      v-if="settings"
      :class="{ clicked: isClicked }"
      class="side__button side__button--menu side__button--settings"
    ></button>
    <button
      v-if="productChart"
      :class="{ clicked: isClicked }"
      class="side__button side__button--menu side__button--product-chart"
    ></button>
    <button
      v-if="users"
      :class="{ clicked: isClicked }"
      class="side__button side__button--menu side__button--users"
    ></button>
  </div>
</template>

<script>
export default {
  name: "SideButton",
  props: {
    logo: {
      type: Boolean,
      default: false,
    },
    tools: {
      type: Boolean,
      default: false,
    },
    chart: {
      type: Boolean,
      default: false,
    },
    wallet: {
      type: Boolean,
      default: false,
    },
    attachment: {
      type: Boolean,
      default: false,
    },
    document: {
      type: Boolean,
      default: false,
    },
    ticket: {
      type: Boolean,
      default: false,
    },
    settings: {
      type: Boolean,
      default: false,
    },
    productChart: {
      type: Boolean,
      default: false,
    },
    users: {
      type: Boolean,
      default: false,
    },
    isClicked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.side__button {
  width: 20px;
  height: 20px;
  border: none;
  background-color: transparent;
  background-repeat: no-repeat;
}
.side__button--logo {
  background-image: url(@/assets/icons/hubnero_logo.svg);
}

.side__button--menu {
  background-color: #8591ae;
  transition: ease-in-out 0.2s;
}
.side__button--menu:hover {
  background-color: #8f20ef;
  transition: ease-in-out 0.2s;
}

.clicked {
  background-color: #8f20ef;
}

.pseudo::before {
  content: "";
  position: absolute;
  width: 4px;
  height: 20px;
  right: 42px;
  top: 4px;
  border-radius: 0px 100px 100px 0px;
  background-color: #8F20EF;

}
.side__button--tools {
  mask-size: cover;
  mask-image: url(@/assets/icons/side_tools.svg);
}

.side__button--chart {
  mask-size: cover;
  mask-image: url(@/assets/icons/side_chart.svg);
}
.side__button--money {
  mask-size: cover;
  mask-image: url(@/assets/icons/side_money.svg);
}
.side__button--attachment {
  mask-size: cover;
  mask-image: url(@/assets/icons/side_attachment.svg);
}
.side__button--document {
  mask-size: cover;
  mask-image: url(@/assets/icons/side_document.svg);
}

.side__button--ticket {
  mask-size: cover;
  mask-image: url(@/assets/icons/side_ticket.svg);
}
.side__button--settings {
  mask-size: cover;
  mask-image: url(@/assets/icons/side_settings.svg);
}
.side__button--product-chart {
  mask-size: cover;
  mask-image: url(@/assets/icons/side_prodchart.svg);
}
.side__button--users {
  mask-size: cover;
  mask-image: url(@/assets/icons/side_users.svg);
}
</style>
