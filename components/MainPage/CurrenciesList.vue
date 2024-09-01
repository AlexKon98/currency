<template>
  <div class="currencies">
    <ul class="currencies__list">
      <li v-if="currency.activeCurrency.name === 'rub' || currency.activeCurrency.name === 'eur'">
        <span>1</span>
        <span>{{ currency.activeCurrency.name }}</span>
        <span>=</span>
        <span>{{ currency.curreniesList[`${currency.activeCurrency.name}-${currency.activeCurrency.name === 'rub' ?
          'eur' : 'rub'}`] }}</span>
        <span>{{ `${currency.activeCurrency.name === 'rub' ? 'eur' : 'rub'}` }}</span>
      </li>

      <li v-if="currency.activeCurrency.name === 'rub' || currency.activeCurrency.name === 'usd'">
        <span>1</span>
        <span>{{ currency.activeCurrency.name }}</span>
        <span>=</span>
        <span>{{ currency.curreniesList[`${currency.activeCurrency.name}-${currency.activeCurrency.name === 'rub' ?
          'usd' : 'rub'}`] }}</span>
        <span>{{ `${currency.activeCurrency.name === 'rub' ? 'usd' : 'rub'}` }}</span>
      </li>

      <li v-if="currency.activeCurrency.name === 'eur' || currency.activeCurrency.name === 'usd'">
        <span>1</span>
        <span>{{ currency.activeCurrency.name }}</span>
        <span>=</span>
        <span>{{ currency.curreniesList[`${currency.activeCurrency.name}-${currency.activeCurrency.name === 'eur' ?
          'usd' : 'eur'}`] }}</span>
        <span>{{ `${currency.activeCurrency.name === 'usd' ? 'eur' : 'usd'}` }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const currency = useCurrency();
</script>

<style lang="scss" scoped>
.currencies {
  &__list {
    display: flex;
    flex-direction: column;
    gap: 8px;

    li {
      display: flex;
      align-items: center;
      gap: 4px;

      span {
        &:nth-child(2), &:nth-child(5) {
          text-transform: uppercase;
        }
      }
    }
  }
}
</style>
