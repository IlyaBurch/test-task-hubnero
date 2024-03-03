<template>
  <table class="table">
    <thead class="tablehead">
      <tr class="row">
        <!-- <th v-for="item in data" :key="item.id">{{ item.name }}</th> -->
        <th class="thead frst">
          <div class="center">
            <ButtonStyled icon="icon-nobackground search" />
            <span>Business Name</span>
            <ButtonStyled icon="icon-nobackground sort" />
          </div>
        </th>
        <th class="thead">
          <div class="center">
            <ButtonStyled icon="icon-nobackground close" />
            <span>Team</span>
            <ButtonStyled icon="icon-nobackground sort" />
          </div>
          <ButtonStyled
            icon="icon-whitebackground dropdown"
            class="space-between"
          />
        </th>
        <th class="thead">
          <div class="center">
            <ButtonStyled icon="icon-nobackground close" />
            <span>Role</span>
            <ButtonStyled icon="icon-nobackground sort" />
          </div>
          <ButtonStyled
            icon="icon-whitebackground dropdown"
            class="space-between"
          />
        </th>
        <th class="thead">
          <div class="center">
            <ButtonStyled icon="icon-nobackground search" />
            <span>Gmail</span>
            <ButtonStyled icon="icon-nobackground sort" />
          </div>
        </th>
        <th class="thead">
          <div class="center">
            <ButtonStyled icon="icon-nobackground close" />
            <span>Birthday</span>
            <ButtonStyled icon="icon-nobackground sort" />
          </div>
          <ButtonStyled
            icon="icon-whitebackground dropdown"
            class="space-between"
          />
        </th>
        <th class="thead">
          <div class="center">
            <span>Telegram</span>
            <ButtonStyled icon="icon-nobackground sort" />
          </div>
        </th>
        <th class="thead">
          <div class="center">
            <span>Last Login</span>
            <ButtonStyled icon="icon-nobackground sort" />
          </div>
        </th>
        <th class="thead lst">User permissions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data" :key="item.id">
        <td class="tbody">
          <div class="center">
						<img class="avatar" :src="item.img" />
						<span>{{ item.name }}</span>
					</div>
        </td>
        <td  class="tbody">
          {{ item.team }}
        </td>
        <td  class="tbody">
          {{ item.role }}
        </td>
        <td  class="tbody">
          {{ item.mail }}
        </td>
        <td  class="tbody">
          {{ item.birth }}
        </td>
        <td  class="tbody">
          {{ item.tg }}
        </td>
        <td  class="tbody">
          {{ item.lastLogin }}
        </td>
        <td  class="tbody">
					<div class="edit">
						<ButtonStyled icon="edit icon-nobackground" class="grey-border" text="Edit"/>
						<ButtonStyled icon="trash icon-nobackground" />
					</div>
				</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import ButtonStyled from "../ui/ButtonStyled.vue";

export default {
  props: {
    data: Array,
  },
  components: {
    ButtonStyled,
  },
};
</script>

<style scoped>
.avatar {
  width: 36px;
  height: 36px;
  border-radius: 12px;
	margin-right: 12px;
}

.row {
  border-radius: 12px;
}

.center {
  display: inline-grid;
  /* justify-content: center; */
	align-items: center;
  grid-auto-flow: column;
}

.table {
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
  /* border-radius: 12px; */
}
/* .tablehead {
  background: #f5f7fb;
} */

.border {
  border-radius: 12px;
}

.thead {
  text-align: left;
  background: #f5f7fb;
  border: 1px solid #e5e8ef;
  border-width: 0 1px 0 1px;
  padding: 0 16px 0 16px;
  overflow: hidden;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  position: relative;
	height: 64px;
}

.tbody {
	height: 64px;
	padding: 0 16px 0 16px;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 20px;
}

.frst {
  border-left: none;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}

.lst {
  border-right: none;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
}

.space-between {
  position: absolute;
  right: 16px;
	top: 22px;
}

.edit {
	display: grid;
	grid-auto-flow: column;
	justify-content: space-between;
	padding: 0 5px 0 0;
}
</style>
