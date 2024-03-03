<template>
  <div>
    <!-- <Button label="Add new Employee" /> -->
    <ButtonStyled
      buttonClass="button__add-employee"
      icon="plus plus-background"
      text="Add new employee"
    />
    <DataTable :data="$data.$team" class="data-table background" />
  </div>
</template>

<script>
import ButtonStyled from "../ui/ButtonStyled.vue";
import DataTable from "../table/DataTable.vue";

export default {
  components: {
    ButtonStyled,
    DataTable,
  },
  data() {
    return {
      $team: [
        {
          id: 1,
          name: "Sarah Connor",
          img: "src/assets/img/a6a062b047be8fcde6d4b8eafcf908df.png",
          team: "Crosty",
          role: "Team lead",
          mail: "mail@mail.com",
          birth: "25.04.1994",
          tg: "@pupa",
          lastLogin: "03.11.2021",
        },
        {
          id: 2,
          name: "Arnold Brown",
          img: "null",
          team: "Gunters",
          role: "Team bleed",
          mail: "mail1@mail.com",
          birth: "25.04.1995",
          tg: "@lupa",
          lastLogin: "01.12.2021",
        },
        {
          id: 3,
          name: "Ernest Eberly",
          img: "src/assets/img/55e7f406228535de4f8e722e9ce77090.png",
          team: "Flamethrowers",
          role: "Seo specialist",
          mail: "mail2@mail.com",
          birth: "23.12.1991",
          tg: "@lorem",
          lastLogin: "12.12.2012",
        },
        {
          id: 4,
          name: "Anders Thomas",
          img: "src/assets/img/55e7f406228535de4f8e722e9ce77090.png",
          team: "Modern Talking",
          role: "Python programmist",
          mail: "chericherilady@mail.com",
          birth: "01.04.1963",
          tg: "@GoinThroughAMotion",
          lastLogin: "03.11.2021",
        },
        {
          id: 5,
          name: "Cheryl Glover",
          img: "src/assets/img/55e7f406228535de4f8e722e9ce77090.png",
          team: "Gunters",
          role: "Seo specialist",
          mail: "lorem@mail.com",
          birth: "21.04.1994",
          tg: "@opagangnamstyle",
          lastLogin: "03.03.2024",
        },
        {
          id: 6,
          name: "Lance Thomas",
          img: "null",
          team: "Flamethrowers",
          role: "Python programmist",
          mail: "csdfay@mail.com",
          birth: "25.04.1944",
          tg: "@elimyasomujiki",
          lastLogin: "03.02.2024",
        },
        {
          id: 7,
          name: "Ernest Eberly",
          img: "src/assets/img/55e7f406228535de4f8e722e9ce77090.png",
          team: "Wizards",
          role: "Semantic Specialist",
          mail: "aSDasd@mail.com",
          birth: "25.04.1994",
          tg: "@pivomZapivali",
          lastLogin: "03.11.2029",
        },
        {
          id: 8,
          name: "Lance Thomas",
          img: "src/assets/img/55e7f406228535de4f8e722e9ce77090.png",
          team: "Gunters",
          role: "Python programmist",
          mail: "asdf@mail.com",
          birth: "23.11.1995",
          tg: "@oChemKonukhGovoril",
          lastLogin: "03.11.2025",
        },
        {
          id: 9,
          name: "Cheryl Glover",
          img: "src/assets/img/55e7f406228535de4f8e722e9ce77090.png",
          team: "Flamethrowers",
          role: "Seo specialist",
          mail: "asdfa@mail.com",
          birth: "25.04.1994",
          tg: "@oniNePonimali",
          lastLogin: "01.12.2022",
        },
      ],


    };
  },
};
</script>

<style scoped>
.button__add-employee {
  display: flex;
  padding: 14px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 12px;
  background-color: #8f20ef;
  color: white;
}

.background{
  background-color:white;
  border-radius: 12px;
}

.data-table {
  margin-top: 28px;
  padding: 16px;
}
</style>
