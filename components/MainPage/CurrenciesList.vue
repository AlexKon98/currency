<template>
  <div class="currencies">
    <ul class="currencies__list">
      <template v-for="curr in Object.keys(currency.currenciesList)" :key="curr">
        <li v-if="curr.startsWith(currency.activeCurrency.name)">
          <span>1</span>
          <span>{{ currency.activeCurrency.name }}</span>
          <span>=</span>
          <span>{{ currency.currenciesList[curr] }}</span>
          <span>{{ curr.replace(`${currency.activeCurrency.name}-`, '') }}</span>
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const currency = useCurrency();
console.log(currency.currenciesList)
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
