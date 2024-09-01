import { $fetch, type FetchOptions } from 'ofetch';

import CurrencyModule from '~/api/modules/currency';

interface IApiInstance {
  currency: CurrencyModule
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const fetchOptions: FetchOptions = {
    baseURL: config.public.apiBaseUrl
  };

  const apiFetcher = $fetch.create(fetchOptions);

  const modules: IApiInstance = {
    currency: new CurrencyModule(apiFetcher)
  };

  return {
    provide: {
      api: modules
    }
  };
});
