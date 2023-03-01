<template>
    <main class="main">
        <my-main-block>
            <h2 class="subtitle">Exchange Rate</h2>
        </my-main-block>
        <div class="main__content">
            <my-main-block>
                <my-currency-convert-view
                    :selectedIconFrom="selectedIconFrom"
                    :selectedIconTo="selectedIconTo"
                    :maxInputFromValue="maxInputFromValue"
                    :maxInputToValue="maxInputToValue"
                    :currentRate="currentRate"
                />
            </my-main-block>
            <my-main-block>
                <h3 class="currencies__label" :class="{'light':!isDarkMode}">Currencies</h3>
                <div class="currencies__view">
                    <my-tabs
                        :tabs="tabs"
                        v-model:activeTabIndex="activeTabIndex"
                        :defaultIcons="defaultIcons"
                        :selectedCurrencyExchange="selectedCurrencyExchange"
                        @changeActiveTabChange="handleChangeActiveTabChange"
                        @change="handleCurrencyChange"
                    />
                </div>
                <my-currencies-operations-block
                    v-model:isSearchBlockShown="isSearchBlockShown"
                    :activeTabIndex="activeTabIndex"
                    @update="fetchCurrencies"
                />
            </my-main-block>
            <SearchCurrencyBlock
                v-model:show="isSearchBlockShown"
                :currencies="currentCurrencyViewContent"
            />
        </div>
    </main>
</template>

<script>
import SearchCurrencyBlock from "@/components/SearchCurrencyBlock";
import axios               from 'axios';

export default {
    name      : 'Main',
    inject    : ['store'],
    components: {
        SearchCurrencyBlock
    },
    data() {
        return {
            fetchBaseParams           : {
                fsym : 'USD',
                tsyms: 'USD,EUR,UAH,BTC,ETH,BNB,GBP,XRP',
            },
            allCurrencyRates          : {}, /**/
            selectedCurrencyPair      : [],
            currencyPairs             : [],
            selectedCurrencyExchange  : {from: 'USD', to: 'UAH', rate: ''},
            selectedIconFrom          : {},
            selectedIconTo            : {},
            currenciesFromSelectArray : [],
            currentCurrencyViewContent: [],
            defaultIcons              : [],
            tabs                      : [
                {title: 'Select Currency'},
                {title: 'All Currencies'},
            ],
            activeTabIndex            : 0,
            isSearchBlockShown        : false,
            
            maxInputFromValue         : 0,
            maxInputToValue           : 0,
            currentRate               : 0,
        }
    },
    methods: {
        createCurrencyPairs() {
            const selectedCurFrom = this.fetchBaseParams.fsym;

            this.selectedCurrencyPair = [];
            this.currencyPairs        = [];

            for (let from in this.allCurrencyRates) {
                for (let to in this.allCurrencyRates) {
                    let pair = {
                        from: from,
                        to  : to,
                        rate: to !== 'BTC' && to !== 'ETH' && to !== 'BNB'
                            ? parseFloat((this.allCurrencyRates[to] / this.allCurrencyRates[from]).toFixed(3))
                            : parseFloat((this.allCurrencyRates[to] / this.allCurrencyRates[from]).toFixed(7))
                    };
                    this.currencyPairs.push(pair);
                }
            }
            this.setSelectedCurrencyPairs();
        },

        setSelectedCurrencyPairs(value = this.selectedCurrencyExchange.from) {
            this.selectedCurrencyPair = this.currencyPairs.filter(item => item.from === value);
        },

        setConvertSettings(limit = 10000) {
            const USDToOther = this.allCurrencyRates[this.selectedIconTo.value];
            const OtherToUSD=this.allCurrencyRates[this.selectedIconFrom.value];

            if(this.selectedIconTo!=='USD'){
                this.maxInputFromValue=OtherToUSD * limit;
                this.maxInputToValue=USDToOther*limit;
                this.currentRate=this.maxInputToValue/this.maxInputFromValue;

            }else {
                this.maxInputFromValue=USDToOther * limit;
                this.maxInputToValue=OtherToUSD*limit;
                this.currentRate=this.maxInputFromValue/this.maxInputToValue;

            }


        },

        loadData() {
            this.createCurrencyPairs();
            this.setSelectedCurrencyExchange(this.selectedCurrencyPair.find(item => item.to === 'UAH'));
            this.loadCurrentCurrencyViewContent();
            this.selectDefaultIcons(this.activeTabIndex);
            this.setCurrenciesFromSelectArray(this.defaultFromSelectArray);
        },

        handleChangeActiveTabChange(index) {
            this.activeTabIndex = index;
        },

        async fetchCurrencies() {
            try {
                this.$store.commit('setIsFetchLoading', true);

                const requestParams = {
                    api: process.env.VUE_APP_FIXER,
                    ...this.fetchBaseParams,
                }
                const {data}        = await axios
                    .get('https://min-api.cryptocompare.com/data/price?', {
                        params: requestParams,
                    })

                this.allCurrencyRates = data;
                this.loadData();
            } catch (error) {
                console.log(error);
            } finally {
                this.$store.commit('setIsFetchLoading', false);
            }
        },

        setCurrenciesFromSelectArray(defaultValue = ['USD', 'UAH', 'EUR']) {
            this.currenciesFromSelectArray = Object.keys(this.allCurrencyRates)
                .filter(key => defaultValue
                    .includes(key));
        },

        changeOption(event) {
            this.selectedIconFrom = this.currentCurrencyViewContent.find(icon => icon.value === event.target.value);
        },

        loadCurrentCurrencyViewContent() {
            this.currentCurrencyViewContent = [];

            const files = require.context('@/assets/images/', false, /\.svg$/);

            this.selectedCurrencyPair.forEach(item => {
                const path = `./${item.to}.svg`;
                const data = {
                    path       : files(path),
                    value      : item.to,
                    rate       : item.rate,
                    from_active: false,
                    to_active  : false,
                };
                this.currentCurrencyViewContent.push(data);
            });
        },

        selectDefaultIcons(activeTabIndex) {
            const currencies = this.currentCurrencyViewContent;
            const sortProp   = !activeTabIndex ? 'from_active' : 'to_active';
            let defaultIcons = [];

            !activeTabIndex
                ? defaultIcons = currencies.filter(currency => this.defaultFromSelectArray.includes(currency.value))
                : defaultIcons = currencies.slice();

            defaultIcons = [
                ...defaultIcons.filter(item => item[sortProp]),
                ...defaultIcons.filter(item => !item[sortProp]),
            ];

            this.defaultIcons = defaultIcons;
        },

        setSelectedIconFrom(value = 'USD') {
            this.currentCurrencyViewContent = this.currentCurrencyViewContent.map(icon => {
                return {
                    ...icon,
                    from_active: icon.value === value
                };
            });
            this.selectedIconFrom           = this.currentCurrencyViewContent.find(icon => icon.value === value);
        },

        setSelectedIconTo(value = 'UAH') {
            this.currentCurrencyViewContent = this.currentCurrencyViewContent.map(icon => {
                return {
                    ...icon,
                    to_active: icon.value === value
                };
            });
            this.selectedIconTo             = this.currentCurrencyViewContent.find(icon => icon.value === value);

        },

        setSelectedCurrencyExchange(value = this.selectedCurrencyExchange) {
            const newValue = this.selectedCurrencyPair.find(item => {
                return item.from === value.from && item.to === value.to;
            });

            this.selectedCurrencyExchange = newValue;
            this.loadCurrentCurrencyViewContent();
            this.setSelectedIconFrom();
            this.setSelectedIconTo();

        },

        handleCurrencyChange(value = this.selectedCurrencyExchange) {
            this.setSelectedCurrencyPairs(value.from)
            this.setSelectedCurrencyExchange(value);

        }
    },

    mounted() {
        this.fetchCurrencies();
    },
    watch   : {
        defaultFromSelectArray() {
            this.selectDefaultIcons(this.activeTabIndex)

        },

        activeTabIndex() {
            this.selectDefaultIcons(this.activeTabIndex);
        },

        selectedCurrencyExchange: {
            handler(newValue) {
                this.fetchBaseParams.fsym = newValue.from;
                this.setSelectedCurrencyPairs(newValue.from);
                this.setSelectedIconFrom(newValue.from);
                this.setSelectedIconTo(newValue.to);
                this.selectDefaultIcons(this.activeTabIndex);
                this.setConvertSettings();
            },
            deep: true,
        },
        fetchBaseParams         : {
            handler() {
                this.createCurrencyPairs();
            },
            deep: true,
        }
    },
    computed: {
        defaultFromSelectArray() {
            return this.$store.state.currencies.defaultFromSelectArray;
        },
        isDarkMode() {
            return this.$store.state.currencies.isDarkMode;
        },
        isFetchLoading() {
            return this.$store.state.currencies.isFetchLoading;
        },
    },
}
</script>

<style scoped>

.main {
    padding: 1.2em;
    display: flex;
    flex-direction: column;
}

.main__content {
    display: flex;
    flex-direction: column;

}

.subtitle {
    color: #4184D2;
    margin-top: 1.2em;
    margin-bottom: 1.2em;
    font-size: 2.5em;
    text-align: center;
    text-decoration: underline;
}

.currencies__view {
    border: 1px solid #747474;
    border-radius: 1.3em;
    padding: 1.7em 1.44em;
}

.currencies__label {
    color: #fff;
    font-weight: 400;
    font-size: 1.8em;
}

.currencies__label.light {
    color: #747474;
}

@media (min-width: 560px) {
    .currencies__view {
        width: 25em;
    }

    .main__content {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    .subtitle{
        font-size: 1.8em;

    }
}

</style>