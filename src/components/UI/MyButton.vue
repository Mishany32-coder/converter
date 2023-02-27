<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style scoped>
.btn {
    font-size: 1em;
    background: #4184D2;
    border-radius: 1.5em;
    padding: 10px 15px;
    color: #ffffff;
    font-weight: 400;
    border: none;
}
</style>