<template>
    <input
        class="input"
        ref="MyInput"
        @click="selectText"
        :placeholder="placeholder"
        :style="{textAlign:align}"
        :class="{'light':!isDarkMode}"
        :value="modelValue"
        @input="updateInput"
    >
</template>

<script>
export default {
    name  : 'my-input',
    inject: ['store'],
    props : {
        type       : [String],
        placeholder: {
            type   : String,
            default: 'placeholder'
        },
        align      : {
            type   : String,
            default: 'left'
        },
        modelValue : {
            type   : [String, Number],
            default: ''
        },
        maxCount   : {
            type   : [Number, String],
            default: 10000,
        }
    },

    methods : {
        selectText() {
            if (this.modelValue.length) {
                this.$refs.MyInput.select();
            }
        },
        updateInput(event) {
                this.$emit('update:modelValue', event.target.value);

        }
    },
    watch   : {},
    computed: {
        isDarkMode() {
            return this.$store.state.currencies.isDarkMode;
        },
    },
}
</script>

<style scoped>

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
}

input::placeholder {
    font-style: italic;
}

</style>