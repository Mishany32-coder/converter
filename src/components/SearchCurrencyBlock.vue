<template>
    <div class="search__currency__wrapper"
         :class="{ show: show }"
         @click="hideSearchBlock"
    >
        <div class="search__currency__block"
             :class="{ show: show ,'light':!isDarkMode}"
             @click.stop
        >
            <hr>
            <span class="search__block__title" :class="{'light':!isDarkMode}">Search currency</span>
            <my-input
                :placeholder="'Введите название валюты'"
                :type='type'
                v-model="searchQuery"
            />
            <div
                v-if="search.length"
                v-for="currency in search"
                :key="currency.value">
                <div class="content">
                    <div class="currency">
                        <img :src='currency.path'>
                        <span class="currency__name">
                        {{ currency.value }}
                    </span>
                    </div>
                    <my-checkbox
                        v-model:checkedCurrencies="checkedCurrencies"
                        :currencyValue="currency.value"
                        :label="label"
                    />
                </div>
            </div>
            <div v-else class="nothing">Its nothing here...</div>
            <my-button @click="addToDefaultFromSelectArray">Select</my-button>
        </div>
    </div>
</template>

<script>
export default {
    name  : 'SearchCurrencyBlock',
    inject: ['store'],
    props : {
        show      : {
            type   : Boolean,
            default: false,
        },
        currencies: {
            type    : Array,
            required: true,
        },
    },
    data() {
        return {
            label             : '',
            type              : 'query',
            checked           : false,
            searchQuery       : '',
            filteredCurrencies: [],
            checkedCurrencies : [],
        };
    },
    methods : {
        hideSearchBlock() {
            this.searchQuery = '';
            this.$emit('update:show', false);
        },

        addToDefaultFromSelectArray() {
            const result = [...this.defaultFromSelectArray, ...this.checkedCurrencies];
            this.$store.commit('setDefaultFromSelectArray', result);
            this.hideSearchBlock();
        }
    },
    watch   : {
        show() {
            if (this.show) {
                this.filteredCurrencies = this.currencies
                    .filter(currency => !this.defaultFromSelectArray.includes(currency.value));
            } else {
                this.filteredCurrencies = [];
            }
        },
    },
    computed: {
        defaultFromSelectArray() {
            return this.$store.state.currencies.defaultFromSelectArray;
        },
        isDarkMode() {
            return this.$store.state.currencies.isDarkMode;
        },
        search() {
            let temp = this.filteredCurrencies
                .filter(currency => currency.value.toLowerCase().includes(this.searchQuery.toLowerCase()))
                .map(currency => {
                    return {...currency, checked: false};
                });
            return temp;
        },
    },
};
</script>

<style>
.currency__name {
    font-size: 1.8em;
    margin-left: .7em;
}

.content {
    display: flex;
    align-items: center;
    padding: 1.5em 0;
    color: #747474;
    justify-content: space-between;
}

.nothing {
    margin: auto;
}

hr {
    width: 20%;
    margin: 2rem auto;
    background-color: #ffffff;
}

.search__block__title.light {
    color: #747474;
}

.search__block__title {
    color: #fff;
    font-size: 1.8em;
}

.search__currency__block.light {
    background: #CFCFCF;
    color: black;
}

.search__currency__block {
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 65vh;
    background-color: #1B1B1B;
    padding: 20px;
    box-shadow: 0 0 .6em rgba(0, 0, 0, 0.2);
    transform: translateY(100%);
    transition: transform 0.5s ease-in-out;
    border-radius: .9em;
}

.search__currency__wrapper {
    display: flex;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
}

.search__currency__wrapper.show {
    opacity: 1;
    visibility: visible;
}

.search__currency__block.show {
    transform: translateY(0%);
}

@media (min-width: 560px) {
    .search__currency__block {
        transform: translateX(300%);
        width: 60vw;
        height: 100vh;
        overflow-y: auto;

    }

    .search__currency__block.show {
        transform: translateX(68%);
    }

    .search__block__title {
        font-size: 1.3em;
    }
}

.currency__name {
    font-size: 1.4em;
}

@media (min-width: 680px) {
    .search__currency__block {
        transform: translateX(300%);
        width: 40vw;
        height: 100vh;
        overflow-y: auto;

    }

    .search__currency__block.show {
        transform: translateX(150%);
    }
}

</style>
