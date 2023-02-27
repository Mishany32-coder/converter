<template>
    <div class="tap">
        <div class="tab__header">
            <button
                v-for="(tab, index) in tabs"
                :key="index"
                :class="{ 'tab__button': true, 'active': activeTabIndex === index }"
                @click="$emit('update:activeTabIndex', index)"
            >
                <span class="tab__title">{{ tab.title }}</span>
            </button>
        </div>

        <div class="tab__content"
             v-for="(tab, index) in tabs"
             :key="index"
             :class="{ 'tab__pane': true, 'active': activeTabIndex === index }"
        >
            <custome-table
                :defaultIcons="defaultIcons"
                :selectedCurrencyExchange="selectedCurrencyExchange"
                :activeTabIndex="currentTabIndex"
                v-if="activeTabIndex === index"
                @change="changeSelectedCurrencies"
            />
        </div>

    </div>
</template>

<script>
import CustomeTable from "@/components/CustomeTable";

export default {
    name      : 'my-tabs',
    components: {CustomeTable},
    props     : {
        tabs                    : {
            type    : Array,
            required: true,
        },
        defaultIcons            : {
            type    : Array,
            required: true,
        },
        selectedCurrencyExchange: {
            type    : Object,
            required: true,
        },
        activeTabIndex          : {
            type   : Number,
            default: 0,
        },
    },
    data() {
        return {
            currentTabIndex                : this.activeTabIndex,
            currentSelectedCurrencyExchange: this.selectedCurrencyExchange,

        };
    },
    methods: {
        changeSelectedCurrencies(value) {
            this.$emit("change", value);
        },
    },
    watch  : {
        activeTabIndex(newIndex) {
            this.currentTabIndex = newIndex;
        },
        selectedCurrencyExchange: {
            handler(newValue) {
                this.currentSelectedCurrencyExchange = newValue
            },
            deep: true,
        },
    }
};
</script>

<style scoped>

.tab__header {
    display: flex;
    justify-content: center;
}

.tab__title {

}

.tab__button {
    background: none;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    color: #747474;
    border-left: 1px solid #4184D2;
    border-right: 1px solid #4184D2;
    flex-grow: 1;

}

.tab__button.active {
    color: #4184D2;
}

.tab__content {
    margin-top: 10px;
}

.tab__pane {
    display: none;
}

.tab__pane.active {
    display: block;
}

@media (min-width: 560px) {
    .tab__title {
        font-size: 1em;
    }

}

@media (min-width: 720px) {
    .tab__title {
        font-size: 1.3em;
    }

}
</style>