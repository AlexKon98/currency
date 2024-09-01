import FetchFactory from '../../base';

import type { ICurrencyList } from './types';

class CurrencyModule extends FetchFactory {
  async getCurrency() {
    return await this.call<Promise<ICurrencyList>>('GET', 'currency');
  }
}

export default CurrencyModule;
