<template>
    <header class="def-width-big">
        <div class="left_side">
            <img class="white-logo" src="../../assets/img/Сгруппировать 1949.png" alt="" />
            <a href="#">Наша продукция</a>
            <a href="#">О нас</a>
            <a href="#">Вопросы и ответы</a>
            <a href="#">Карта</a>
            <a href="#">Оставить заявку</a>
            <!-- <button class="menu" @click="openMenu" >menu</button> -->
        </div>


        <div class="right-side-mobile ">
            <phoneIcon/>
            <cartIcon />
            <menuIcon class="menu" />
        </div>
        <div class="right_side">
            <span>Офис:</span>
            <a href="#">+998 95 509-28-13</a>
            <cartIcon />
        </div>
    </header>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import menuIcon from '../icons-component/menuIcon.vue'
import cartIcon from '../icons-component/cart.vue'
import phoneIcon from '../icons-component/phone.vue'

export default {
    name: 'Header',
    methods: {
        ...mapActions(['openMenu']),
    },
    components: {
        menuIcon,
        cartIcon,
        phoneIcon
    },
}
</script>

<style lang="scss">
header {
    display: flex;
    justify-content: space-between;
    position: absolute;
    z-index: 10;
    top: 45px;
    left: 0px;
    right: 0px;
    width: 100%;
    .left_side {
        display: flex;
        align-items: center;
        img {
            padding-right: 36px;
        }
        a {
            color: var(--body-color);
            padding: 0px 36px;
            font-size: 18px;
            white-space: nowrap;
        }
    }
    .right_side, .right-side-mobile {
        display: flex;
        align-items: center;
        span {
            font-weight: bold;
            font-size: 14px;
            color: #707070;
        }
        a {
            color: var(--body-color);
            padding-left: 12px;
            padding-right: 40px;
            font-size: 18px;
            white-space: nowrap;
        }
    }
}
</style>
Menu
