<template>
    <div>
        <div class="currencies__operations__block tabIndex0">
            <a
                class="currencies__operations"
                :class="{'show':!activeTabIndex}"

                @click="showSearchBlock"
            >
                Add more currencies
            </a>
        </div>

        <div class="currencies__operations__block tabIndex1">
            <img
                class="currencies__operations__img"
                :class="{'show':activeTabIndex}"
                v-if="!disabled"
                src="@/components/currencyControlsIcons/updateCurrencyIcon.svg"
            >
            <a
                class="currencies__operations"
                :class="{'show':activeTabIndex}"
                v-if="!disabled"
                @click="updateApiRates"
            >
                Update currencies
            </a>
            <a
                class="currencies__operations"
                :class="{'show':activeTabIndex}"
                v-else
            >
                Time left: {{ timeLeft }}
            </a>
        </div>

    </div>

</template>

<script>
export default {
    name : 'my-currencies-operations-block',
    props: {
        activeTabIndex    : {
            type   : Number,
            default: 0,
        },
        isSearchBlockShown: {
            type   : Boolean,
            default: false,
        },
    },
    data() {
        return {
            disabled: false,
            timeLeft: 0,
        }
    },
    methods: {
        showSearchBlock() {
            this.$emit('update:isSearchBlockShown', true);
        },
        updateApiRates() {
            if (!this.disable) {
                this.$emit('update');
                this.disabled = true;
            }
            this.timeLeft = 5

            const intervalId = setInterval(() => {
                if (this.timeLeft === 0) {
                    clearInterval(intervalId)
                    this.disabled = false
                } else {
                    this.timeLeft -= 1 //
                }
            }, 1000)

        },
    }
}
</script>

<style scoped>

.currencies__operations {
    display: none;
    font-size: 1.5em;
}

a {
    color: #4184D2;
    cursor: pointer;
}

.currencies__operations__block {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.currencies__operations__img {
    display: none;
    height: 1.7em;
    width: 1.7em;
}

.show {
    display: block;
}


</style>