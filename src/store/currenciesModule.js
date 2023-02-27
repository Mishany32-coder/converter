import axios                from "axios";
import createPersistedState from "vuex-persistedstate";

export const currenciesModule = {
    state    : () => ({
        defaultFromSelectArray: ['USD', 'UAH', 'EUR'],
        isDarkMode:true,
        isFetchLoading:false,
    }),

    getters  : {
        getDefaultFromSelectArray: (state) => state.defaultFromSelectArray,
        getIsDarkMode: (state) => state.isDarkMode,
        getIsFetchLoading: (state) => state.isFetchLoading,
    },
    mutations: {
        setDefaultFromSelectArray(state, newValue) {
            state.defaultFromSelectArray = newValue;
        },
        setIsDarkMode(state, newValue) {
            state.isDarkMode = newValue;
        },
        setIsFetchLoading(state, newValue) {
            state.isFetchLoading = newValue;
        }
    },
    actions  : {
        setDefaultFromSelectArray({commit}, newValue) {
            commit('SET_DEFAULT_FROM_SELECT_ARRAY', newValue);
        }
    },

}