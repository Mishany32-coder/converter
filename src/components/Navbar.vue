<template>
    <nav class="menu" id="main-menu">
        <div class="menu__dropdown">
            <ul id="menu" class="nav__menu">
                <li><a :class="{'dark':!isDarkMode}" @click="$router.push('/')" class="">Some page1</a></li>
                <li><a :class="{'dark':!isDarkMode}" @click="$router.push('/second')" class="">Some page2</a></li>
                <li><a :class="{'dark':!isDarkMode}" @click="$router.push('/third')" class="">Some page3</a></li>
                <li><a :class="{'dark':!isDarkMode}" @click="$router.push('/fourth')" class="">About</a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    computed:{
        isDarkMode() {
            return this.$store.state.currencies.isDarkMode;
        },
    }
}
</script>

<style scoped>

.menu {
    position: relative;
}

.menu__dropdown {
    display: none;
    position: absolute;
    right: 0;
    left: 0;
    margin: 0;
}

.menu.is-open .menu__dropdown {
    display: flex;
}

.nav__menu {
    margin-top: 0;
    padding: 0;
    border: 1px solid black;
    background: black;
}

.nav__menu > li + li {
    border-top: 1px solid black;
}

.nav__menu > li > a {
    width: 100vw;
    display: block;
    padding: 0.7em 1em;
    font-weight: normal;
}

@media (min-width: 560px) {
    .menu__dropdown {
        display: block;
        position: static;
    }

    .nav__menu {
        display: flex;
        border: none;
        padding: 0 1em;
        list-style-type: none;
    }

    .nav__menu > li {
        flex: 1;
    }

    .nav__menu > li + li {
        border: none;
    }

    .nav__menu > li > a {
        padding: .3em;
        text-align: center;
        width: auto;
    }
}

</style>