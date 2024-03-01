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
      <div class="teaminfo__counts">
        <div>
          <span class="counts__num">{{ teamInfo.membersCount }}</span>
        </div>
        <div>
          <span class="counts__text">members</span>
        </div>
      </div>
      <div class="divider"/>
      <div class="teaminfo__counts">
        <div>
          <span class="counts__num">{{ teamInfo.online }}</span>
        </div>
        <div>
          <span class="counts__text">online</span>
        </div>
      </div>
      <div class="divider"/>
      <div class="teaminfo__counts">
        <div>
          <span class="counts__num">{{ teamInfo.men }}</span>
        </div>
        <div>
          <span class="counts__text">men</span>
        </div>
      </div>
      <div class="divider"/>
      <div class="teaminfo__counts">
        <div>
          <span class="counts__num">{{ teamInfo.women }}</span>
        </div>
        <div>
          <span class="counts__text">women</span>
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
}

.teaminfo__wrapper {
  padding: 16px 28px 16px 28px;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.teaminfo__name {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 72px;
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
}

.divider {
  width: 1px;
  height: 47px;
  background-color: #e5e8ef;
  margin-left: 36px;
  margin-right: 36px;
}
</style>
