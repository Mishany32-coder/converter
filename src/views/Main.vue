<template>
    <my-loader v-if="isFetchLoading"/>
    <div class="app" :class="{ 'dark': isDarkMode }">
        <Header>
            <my-burger-button
                :class="burgerClass"
                @click="toggleMenu"
            />
        </Header>
        <Navbar
            :class="menuClass"
        />
        <Main/>
        <my-button class="btn__changeMode" @click="changeMode">Change mode</my-button>

    </div>


</template>

<script>
import MyBurgerButton from "@/components/UI/MyBurgerButton";
import Header         from "@/components/Header";
import Navbar         from "@/components/Navbar";
import Main           from "@/components/Main";
import MyLoader       from "@/components/UI/MyLoader";

export default {
    name      : 'App',
    inject    : ['store'],
    components: {MyLoader, Main, Navbar, Header, MyBurgerButton},
    data() {
        return {
            isBurgerActive: false,
            isMenuHidden  : true,
        };
    },
    methods : {
        changeMode() {
            this.$store.commit('setIsDarkMode', !this.isDarkMode);
        },
        toggleMenu() {
            this.isBurgerActive = !this.isBurgerActive;
            this.isMenuHidden   = !this.isMenuHidden;
        }
    },
    computed: {
        burgerClass() {
            return this.isBurgerActive ? 'active' : '';
        },
        menuClass() {
            return this.isMenuHidden ? '' : 'is-open';
        },
        isDarkMode() {
            return this.$store.state.currencies.isDarkMode;
        },
        isFetchLoading() {
            return this.$store.state.currencies.isFetchLoading;
        },
    }

}
</script>
<style>

</style>