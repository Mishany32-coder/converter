<template>
    <div class="loader-wrapper">
        <div class="overlay"></div>
        <div class="loader">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'my-loader',
}
</script>
<style>
.loader-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.loader {
    display: flex;
    justify-content: center;
    align-items: center;
}

.circle {
    background-color: #4184D2;
    width: 10px;
    height: 10px;
    margin: 5px;
    border-radius: 50%;
    animation: bounce 0.5s ease-in-out alternate infinite;
}

.circle:nth-of-type(2) {
    animation-delay: 0.2s;
}

.circle:nth-of-type(3) {
    animation-delay: 0.4s;
}

@keyframes bounce {
    to {
        transform: translate(0, -10px);
    }
}
</style>
