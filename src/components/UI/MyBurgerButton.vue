<template>
    <button class="burger" >
        <span class="burger__line top__line"></span>
        <span class="burger__line mid__line"></span>
        <span class="burger__line bottom__line"></span>
    </button>
</template>

<script>
export default {}
</script>

<style scoped>
.burger {
    height: 1.25em;
    position: relative;
    width: 1.87em;
    background-color: transparent;
    border: none;
    line-height: .3em;
    overflow: hidden;
    white-space: nowrap;
}

.burger__line {
    display: flex;
    width: 30px;
    height: 2px;
    background: #fff;
    transition: .3s all ease;
}

.top__line {
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(0, -50%);
}

.mid__line {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
}

.bottom__line {
    position: absolute;
    left: 0;
    bottom: 0;
}

.burger.active > .top__line {
    transform: translateY(8px) rotate(45deg);
    transition: .3s all ease;
}

.burger.active > .mid__line {
    opacity: 0;
    transition: .3s all ease;
}

.burger.active > .bottom__line {
    transform: translateY(-10px) rotate(-45deg);
    transition: .3s all ease;
}

@media (min-width: 560px) {
    .burger {
        display: none;
    }
}
</style>