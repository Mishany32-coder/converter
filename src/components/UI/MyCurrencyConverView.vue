<template>
    <div class="currency__convert__view">
        <div class="currency__wrap">
            <h3 class="label">From</h3>
            <div class="input__block">
                <img :src="selectedIconFrom.path" class="selected__icon">
                <span class="selected__currency">{{ selectedIconFrom.value }}:</span>
                <input class="input"
                    :type="type"
                       type="text"
                       :class="{'light':!isDarkMode}"
                    v-model.number="inputFrom"
                    :nowInChanging="fromValueInChanging"
                    @input="handleInputFrom"
                    @focus="handleFocus"

                />
            </div>

        </div>

        <div class="currency__wrap">
            <h3 class="label">To</h3>
            <div class="input__block">
                <img :src="selectedIconTo.path" class="selected__icon">
                <span class="selected__currency">{{ selectedIconTo.value }}:</span>
                <input class="input"
                    :type="type"
                       type="text"
                    v-model.number="inputTo"
                       :class="{'light':!isDarkMode}"
                    :nowInChanging="toValueInChanging"
                    @input="handleInputTo"
                    @focus="handleFocus"
                />
            </div>
        </div>
        Max: {{ maxInputToValue }} {{ selectedIconTo.value }}

    </div>

</template>

<script>
import MyInput from "@/components/UI/MyInput";

export default {
    name      : "my-currency-convert-view",
    components: {MyInput},
    inject: ['store'],
    props     : {
        selectedIconFrom: {
            type    : Object,
            required: true,
        },
        selectedIconTo  : {
            type    : Object,
            required: true,
        },
        maxInputFromValue:Number,
        maxInputToValue:Number,
        currentRate:Number,
    },
    data() {
        return {
            type         : 'Exchange',
            inputFrom        : 0,
            inputTo          : 0,
            fromValueInChanging : false,
            toValueInChanging   : false,


        };
    },
    methods: {
        handleInputFrom(event) {
            event.target.value = event.target.value
                .replace(/[^.\d]|(?<=\..*)\./g, '')
                .replace(/^0+([1-9])/, '$1');

            const rate     = this.currentRate;
            this.inputFrom = parseFloat(this.inputFrom)
            if (!this.fromValueInChanging) {
                let value = parseFloat(event.target.value);
                if (value > this.maxInputFromValue) {
                    this.inputFrom = this.maxInputFromValue;
                }
                this.inputTo = value * rate;
                if (this.inputTo > this.maxInputToValue) {
                    this.inputTo   = this.maxInputToValue;
                    this.inputFrom = this.maxInputToValue / rate;
                }
            }
        },
        handleInputTo(event) {
            event.target.value = event.target.value
                .replace(/[^.\d]|(?<=\..*)\./g, '')
                .replace(/^0+([1-9])/, '$1');


            const rate   = this.currentRate;
            this.inputTo = parseFloat(this.inputTo)
            if (!this.toValueInChanging) {
                let value = parseFloat(event.target.value);
                if (value > this.maxInputToValue) {
                    this.inputTo = this.maxInputToValue;
                }

                this.inputFrom = value / rate;
                if (this.inputFrom > this.maxInputFromValue) {
                    this.inputFrom = this.maxInputFromValue;
                    this.inputTo   = this.maxInputFromValue * rate;
                }
            }
        },

        handleFocus(event) {
            event.target.select();
        },
        clearInputs() {
            this.inputFrom = 0;
            this.inputTo   = 0;
        },
        recalculateInputs() {
            const rate = this.currentRate;

            // пересчет значения inputFrom
            if (!this.fromValueInChanging) {
                this.inputTo = this.inputFrom * rate;
                if (this.inputTo > this.maxInputToValue) {
                    this.inputTo = this.maxInputToValue;
                    this.inputFrom = this.inputTo / rate;
                }
            }

            // пересчет значения inputTo
            if (!this.toValueInChanging) {
                this.inputFrom = this.inputTo / rate;
                if (this.inputFrom > this.maxInputFromValue) {
                    this.inputFrom = this.maxInputFromValue;
                    this.inputTo = this.inputFrom * rate;
                }
            }
        },
        // ...
    },
    watch: {
        selectedIconFrom: {
            handler(newVal) {
                this.recalculateInputs();
            },
            deep: true,
        },
        selectedIconTo: {
            handler(newVal) {
                this.recalculateInputs();
            },
            deep: true,
        },
        inputFrom() {
            if (isNaN(this.inputFrom)) {
                this.clearInputs();
            }
        },
        inputTo() {
            if (isNaN(this.inputTo)) {
                this.clearInputs();
            }
        },
    },
    computed: {
        isDarkMode() {
            return this.$store.state.currencies.isDarkMode;
        },
    },
}
</script>

<style scoped>

.currency__convert__view {
    border: none;
    margin-bottom: 3em;
}

.currency__wrap {
    border-bottom: 3px solid #4184D2;
    padding-bottom: .9em;
}

.input__block {
    display: flex;
    align-items: center;
}

.selected__currency {
    color: #747474;
    font-size: 1.8em;
    margin-right: .7em;
}

.label {
    color: #747474;
    font-weight: 400;
    font-size: 1.5em;
    margin-top: .7em;
}

.selected__icon {
    margin-right: .3em;
}
.input.light {
    color: black;
}

.light::placeholder {
    color: #747474;
}

.input {
    color: white;
    background-color: transparent;
    font-weight: 400;
    border: 1px solid #747474;
    border-radius: .9em;
    padding: .9em .9em;
    text-align: right;
}

input::placeholder {
    font-style: italic;
}
</style>