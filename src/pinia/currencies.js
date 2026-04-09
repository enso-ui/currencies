import { defineStore } from 'pinia';

export const currencies = defineStore('currencies', {
    state: () => ({
        currencies: null,
        countries: [],
        defaultCurrency: null,
    }),

    getters: {
        currency: state => currencyId => state.currencies
            .find(({ id }) => id === currencyId),
        countryCurrency: state => countryId => {
            const { currencyCode } = state.countries
                .find(({ id }) => id === countryId);

            return state.currencies
                .find(({ code }) => code === currencyCode);
        },
    },

    actions: {
        set(payload) {
            if (payload.currencies) {
                this.currencies = payload.currencies;
                this.defaultCurrency = payload.currencies
                    .find(currency => currency.isDefault);
            }

            if (payload.countries) {
                this.countries = payload.countries;
            }
        },
    },
});
