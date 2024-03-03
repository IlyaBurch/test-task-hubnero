<template>
  <div class="teaminfo">
    <div class="teaminfo__wrapper">
      <div class="teaminfo__name">
        <div class="name__icon">
          <img src="@/assets/icons/side_users.svg" />
        </div>
        <div class="name__text">
          {{ teamInfo.name }}
        </div>
      </div>
      <div class="teaminfo__desc">
        <div class="teaminfo__counts">
          <div class="counts__num">{{ teamInfo.membersCount }}</div>
          <div class="counts__text">members</div>
        </div>
        <div class="divider" />
        <div class="teaminfo__counts">
          <div class="counts__num num--online">{{ teamInfo.online }}</div>
          <div class="counts__text">online</div>
        </div>
        <div class="divider" />
        <div class="teaminfo__counts">
          <div class="counts__num">{{ teamInfo.men }}</div>
          <div class="counts__text">men</div>
        </div>
        <div class="teaminfo__counts teaminfo__counts--double">
          <div class="counts__num">{{ teamInfo.women }}</div>
          <div class="counts__text">women</div>
        </div>
        <div class="divider" />
        <div class="teaminfo__counts">
          <div class="counts__num">{{ teamInfo.averageAge }}</div>
          <div class="counts__text">average age</div>
        </div>
        <div class="divider" />
        <div class="teaminfo__counts">
          <div class="counts__num">{{ teamInfo.daysWorkAverage }}</div>
          <div class="counts__text">days work on average</div>
        </div>
        <div class="divider" />
        <div class="teaminfo__counts">
          <div class="counts__num">{{ teamInfo.daysWorkNewEmployee }}</div>
          <div class="counts__text">days work newest employee</div>
        </div>
        <div class="divider" />
        <div class="teaminfo__counts">
          <div class="counts__num">{{ teamInfo.daysWorkOldEmployee }}</div>
          <div class="counts__text">days work oldest employee</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    teamInfo: Object,
  },

  // data: () =>{
  //   teamInfo:
  // }
};
</script>

<style scoped>
.teaminfo {
  background-color: white;
  border-radius: 12px;
  display: inline-block;
  width: auto;
}

.teaminfo__wrapper {
  padding: 16px 28px 16px 28px;
  /* width: ; */
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.teaminfo__desc {
  display: grid;
  grid-auto-flow: column;
  margin: 0 72px 0 72px;
}

.teaminfo__name {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.teaminfo__counts--double {
  margin-left: 40px;
}
.name__text {
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
}
.name__icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: #f3f9ff;
  display: grid;
  place-items: center;
  margin-right: 16px;
}

.counts__text {
  color: #8591ae;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}

.counts__num {
  font-family: Commissioner;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  position: relative;
}

.num--online::after {
  content: url(@/assets/icons/ui/online-badge.svg);
  position: absolute;
  bottom: 7px;
  /* width: */
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
