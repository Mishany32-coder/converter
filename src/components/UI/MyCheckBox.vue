<template>
    <div class="circle__checkbox" :class="{ checked }" @click="updateChecked">
        <input type="checkbox" :checked="checked" hidden>
        <div class="circle__checkbox-inner">
            <span v-if="checked">✓</span>
        </div>
    </div>
</template>

<script>
export default {
    name : "my-checkbox",
    props: {
        label: String,

        checkedCurrencies: {
            type   : Array,
            default: [],
        },
        currencyValue    : String,
    },
    data() {
        return {
            checked: false,
        };
    },
    methods: {
        updateChecked() {
            this.checked = !this.checked;
            if (this.checked) {
                this.checkedCurrencies.push(this.currencyValue);
            } else {
                const index = this.checkedCurrencies.indexOf(this.currencyValue);
                if (index !== -1) {
                    this.checkedCurrencies.splice(index, 1);
                }
            }
            this.$emit("update:checkedCurrencies", this.checkedCurrencies);
        },
    },
};
</script>

<style>
.circle__checkbox {
    position: relative;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid #666;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}

.circle__checkbox-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: transparent;
    transition: all 0.3s;
}

.circle__checkbox-inner span {
    color: #ffffff;
    font-size: 1.9em;
}

.circle__checkbox.checked .circle__checkbox-inner {
    background-color: #4184D2;
    width: 100%;
    height: 100%;
}

.circle__checkbox label {
    color: #fff;
    margin-left: 10px;
}

@media (min-width: 560px) {
    .circle__checkbox-inner span {
        font-size: 1.5em;
    }
}
</style>
