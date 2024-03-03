<template>
    <div class="user-menu">
        <img  :src="img" alt="user-avatar" class="avatar"/>
        <span class="name">{{name}}</span>
        <ButtonStyled icon="icon-whitebackground dropdown" />
    </div>
</template>

<script>
    import ButtonStyled from "../ui/ButtonStyled.vue";
    export default {
        props: {
            img: String,
            name: String,
        },
        components: {
            ButtonStyled,
        }
    }
</script>

<style scoped>
.name{
    font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 20px;
padding-left: 12px;
padding-right: 12px;
}

.avatar{
    width: 32px;
    height: 32px;
    border-radius: 8px;
}

.user-menu{
    display: inline-grid;
    grid-auto-flow: column;
    align-items: center;
}
</style>