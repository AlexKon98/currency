import { defineStore } from 'pinia';
import { skipHydrate } from 'pinia';
import { ref, computed } from 'vue';
import type { Ref } from 'vue';
import type { ICurrencyList } from '~/api/modules/currency/types';

interface ICurrency {
  id: number,
  name: string,
  isActive: boolean
}

const useCurrencyStore = defineStore('currency', () => {
  const { $api } = useNuxtApp();

  const isInitialized: Ref<boolean> = ref(false);
  const isError = ref(false);

  const supportedCurrencies: Ref<ICurrency[]> = ref([
    {
      id: 0,
      name: 'rub',
      isActive: true
    }, {
      id: 1,
      name: 'usd',
      isActive: false
    }, {
      id: 0,
      name: 'eur',
      isActive: false
    }
  ]);

  const activeCurrency = computed(() => {
    return supportedCurrencies.value.find(curr => curr.isActive);
  });

  const setCurrency = (name: 'rub' | 'usd' | 'eur') => {
    supportedCurrencies.value.forEach(sCurr => {
      if (sCurr.name === name) sCurr.isActive = true;
      else sCurr.isActive = false;
    });
  } 

  const currenciesList: Ref<ICurrencyList> = ref({} as ICurrencyList);

  const initialize = async () => {
    try {
      const response = await $api.currency.getCurrency();

      const keys = Object.keys(response);

      keys.forEach(key => {
        if ((key.includes('usd-') || key.includes('rub-') || key.includes('eur-')) && !key.includes('kzt') && !key.includes('idr') && !key.includes('brl')) {
          currenciesList.value[key] = response[key];
        }
      });
    } catch (err) {
      isError.value = true;
    } finally {
      isInitialized.value = true;
    }
  };

  return {
    isInitialized,
    currenciesList: skipHydrate(currenciesList),
    supportedCurrencies,
    activeCurrency,
    initialize,
    setCurrency
  }
});

export const useCurrency = () => {
  const currencyStore = useCurrencyStore();

  if (
    !currencyStore.isInitialized
    &&
    import.meta.client
  ) {
    currencyStore.initialize();
  }

  return currencyStore;
};
