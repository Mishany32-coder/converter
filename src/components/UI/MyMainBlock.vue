<template>
    <div class="row">
        <section class="column">
            <slot></slot>
        </section>
    </div>
</template>

<script>
export default {
    name: 'my-main-block',
}
</script>

<style scoped>

.row {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

@media (min-width: 560px) {
    .row {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
    }
}
</style>