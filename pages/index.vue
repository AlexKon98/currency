<template>
  <div class="main-page">
    <div class="container">
      <h1 class="main-page__title">Exchange rate</h1>

      <section class="main-page__currency">
        <CurrenciesList />
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CurrenciesList from '~/components/MainPage/CurrenciesList.vue';

const currency = useCurrency();
</script>

<style lang="scss" scoped>
.main-page {
  margin: 30px 0;

  &__title {
    margin-bottom: 30px;
  }
}
</style>