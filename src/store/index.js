import {createStore}        from "vuex";
import {currenciesModule}   from "@/store/currenciesModule";
import createPersistedState from "vuex-persistedstate";

export default createStore({

    modules:{
        currencies:currenciesModule,

    },
    plugins  : [createPersistedState()],

})