<template>
    <header class="header">
        <div class="header__title" @click="$router.push('/')">
            <h1>TEST-CURRENCY-CONVERTER</h1>
        </div>
        <slot></slot>
    </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped>
.header {
    padding: 0.5em 1em;
    background: #4184D2;
    text-shadow: .1em .1em .1em #000;
    box-shadow: .5em .0em 1.8em #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 15vh;

}

.header__title > h1 {
    color: #fff;
    text-transform: uppercase;
    font-size: 1.7em;
    margin: .25em 0;
}

@media (min-width: 560px) {
    .header__title > h1{
        font-size: 1em;
    }
    .header{
        height: auto;
    }
}
</style>