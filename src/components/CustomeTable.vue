<template>
    <table>
        <tr
            class=""
            v-for="(currency, index) in defaultIcons"
            :key="index"
            :class="{'isActive':activeTabIndex? currency.to_active:currency.from_active}"
            @click="$emit('change',
            !activeTabIndex
                ?{...selectedCurrencyExchange, from: currency.value}
                :{...selectedCurrencyExchange, to: currency.value}
            )"
        >
            <td>
                <div class="td__content">
                    <img :src='currency.path'>
                    <span class="currency__name">
                        {{ currency.value }}
                    </span>
                </div>
            </td>
            <td>
                <div class="td__content">
                    <span class="currency__name">
                        {{ currency.rate }}
                    </span>
                </div>
            </td>

        </tr>
    </table>
</template>

<script>
export default {
    name : 'custome-table',
    props: {
        defaultIcons            : {
            type    : Array,
            required: true,
        },
        activeTabIndex          : {
            type   : Number,
            default: 0,
        },
        selectedCurrencyExchange: {
            type    : Object,
            required: true,
        }
    },
    data() {
        return {}
    },

}
</script>

<style scoped>

table {
    border-collapse: collapse;
    width: 100%;
    position: relative;
}

tr {
    display: flex;
    justify-content: space-between;
    color: #747474;
    cursor: pointer;

}


tr:not(:last-child) {
    border-bottom: 1px solid #AEACAC;
}

td {
    vertical-align: middle;
    padding: 1.5em 0;
    cursor: pointer;

}

.td__content {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.isActive {
    color: #4184D2;
}

.currency__name {
    font-size: 1.8em;
    margin-left: .7em;
}


@media (min-width: 560px) {
    .currency__name {
        font-size: 1.2rem;
    }
}
</style>