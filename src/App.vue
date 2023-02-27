<template>
    <router-view></router-view>
</template>

<script>
export default {

}
</script>

<style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

:root {
    font-size: calc(1vw + 0.3em);
    --bg-color-light: url('./assets/images/backgroundLight.svg');
    --bg-color-dark: url('./assets/images/backgroundDark.svg');
    --text-color-light: #000;
    --text-color-dark: #4184D2;
}

.app {
    min-height: 100vh;
    background-image: var(--bg-color-light);
    color: var(--text-color-light);
    background-size: cover;
    background-repeat: no-repeat;
}

.app.dark {
    background-image: var(--bg-color-dark);
    color: var(--text-color-dark);
}

a.dark{
    color: #ffffff;
}

a:link {
    color: var(--text-color-dark);
    font-weight: bold;
    text-decoration: none;
}

a:visited {
    color: var(--text-color-dark);
}

a:hover {
    text-decoration: underline;
    cursor: pointer;
}

a:active {
    color: #4184D2;
}


.btn__changeMode {
    position: fixed;
    right: 0.5em;
    bottom: 0.5em;
}

@media (min-width: 560px) {
    .header__title > h1 {
        font-size: 2.2rem;
    }
}



</style>
