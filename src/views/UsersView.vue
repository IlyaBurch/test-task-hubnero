<script>
import TeamInfo from "../components/users/TeamInfo.vue";

export default {
  components: {
    TeamInfo,
  },
  data() {
    return {
      team: {
        name: "Team",
        membersCount: 130,
        online: 36,
        men: 50,
        women: 80,
        averageAge: 29, 
        daysWorkAverage: 265,
        daysWorkNewEmployee: 36,
        daysWorkOldEmployee: 1256,
      },
    };
  },
};
</script>

<template>
  <main class="main">
    <TeamInfo :team-info="team" />
  </main>
</template>

<style scoped>
.main {
  background-color: #f5f7fb;
  height: 100vh;
}
</style>
