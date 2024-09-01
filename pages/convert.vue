<template>
  <div class="convert-page">
    <div class="container">

      <form @submit.prevent class="convert-page__form">
        <h2 class="convert-page__form-title">Convert</h2>

        <label class="convert-page__label" for="first">
          <input class="number" type="number" id="first">

          <div class="convert-page__dropdown">
            <div class="convert-page__currency">
              <img class="convert-page__flag" v-if="firstActive.name === 'rub'" src="@/assets/icons/ru.svg" alt="">
              <img class="convert-page__flag" v-if="firstActive.name === 'usd'" src="@/assets/icons/us.svg" alt="">
              <img class="convert-page__flag" v-if="firstActive.name === 'eur'" src="@/assets/icons/eu.svg" alt="">
              <span>{{ firstActive.name }}</span>
              <img src="@/assets/icons/dropdown.svg" alt="">
            </div>

            <ul class="convert-page__currencies-list">
              <li v-for="curr in currencies">
                <img v-if="curr?.name === 'rub'" src="@/assets/icons/ru.svg" alt="">
                <img v-if="curr?.name === 'usd'" src="@/assets/icons/us.svg" alt="">
                <img v-if="curr?.name === 'eur'" src="@/assets/icons/eu.svg" alt="">
                <span>{{ curr.name }}</span>
              </li>
            </ul>
          </div>
        </label>

        <label class="convert-page__label" for="second">
          <input class="number" type="number" id="second">

          <div class="convert-page__dropdown">
            <div class="convert-page__currency">
              <img class="convert-page__flag" v-if="secondActive.name === 'rub'" src="@/assets/icons/ru.svg" alt="">
              <img class="convert-page__flag" v-if="secondActive.name === 'usd'" src="@/assets/icons/us.svg" alt="">
              <img class="convert-page__flag" v-if="secondActive.name === 'eur'" src="@/assets/icons/eu.svg" alt="">
              <span>{{ secondActive.name }}</span>
              <img src="@/assets/icons/dropdown.svg" alt="">
            </div>

            <ul class="convert-page__currencies-list">
              <li v-for="curr in currencies">
                <img v-if="curr?.name === 'rub'" src="@/assets/icons/ru.svg" alt="">
                <img v-if="curr?.name === 'usd'" src="@/assets/icons/us.svg" alt="">
                <img v-if="curr?.name === 'eur'" src="@/assets/icons/eu.svg" alt="">
                <span>{{ curr.name }}</span>
              </li>
            </ul>
          </div>
        </label>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const currency = useCurrency();

const currencies = ref([
  {
    id: 0,
    name: 'rub',
    isActiveFirst: true,
    isActiveSecond: false,
  },
  {
    id: 1,
    name: 'usd',
    isActiveFirst: false,
    isActiveSecond: true,
  },
  {
    id: 2,
    name: 'eur',
    isActiveFirst: false,
    isActiveSecond: false,
  }
]);

const firstActive = computed(() => {
  return currencies.value.find(curr => curr.isActiveFirst);
});

const secondActive = computed(() => {
  return currencies.value.find(curr => curr.isActiveSecond);
});
</script>

<style lang="scss" scoped>
.number {
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
    margin: 0;
  }

  & {
    -moz-appearance: textfield;
  }

  &:hover,
  &:focus {
    -moz-appearance: number-input;
  }
}

.convert-page {
  margin: 30px 0;

  &__form {
    display: flex;
    flex-direction: column;
    width: clamp(300px, 50%, 100%);
    background-color: $grey;
    padding: 30px;
    border-radius: 16px;
    margin: 0 auto;

    &-title {
      margin-bottom: 30px;
    }
  }

  &__label {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    input {
      flex: 1;
      margin-right: 30px;
    }
  }

  &__dropdown {
    position: relative;
  }

  &__currency {
    cursor: pointer;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    transition: color .4s ease;

    &:hover {
      color: $grey2;
    }

    img:not(.header__flag) {
      display: block;
      margin-left: 4px;
      transition: transform .4s ease;
    }

    &.active {
      img:not(.header__flag) {
        transform: rotate(180deg);
      }
    }
  }

  &__currencies-list {
    position: absolute;
    right: 0;
    top: 40px;
    background-color: #fff;
    padding: 8px 0;
    border-radius: 8px;
    box-shadow: 0px 2px 4px 0px #0000001A, 0px 0px 8px 0px #00000014;
    visibility: hidden;
    opacity: 0;
    transition: opacity .4s ease, top .4s ease;

    &.active {
      opacity: 1;
      visibility: visible;
      top: 30px;
    }

    li {
      cursor: pointer;
      text-transform: uppercase;
      padding: 4px 8px;
      display: flex;
      align-items: center;

      img {
        display: block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-right: 8px;
        margin-bottom: 4px;
      }

      &.active {
        color: $orange;
      }
    }
  }

  &__flag {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 8px;
    margin-bottom: 4px;
  }
}
</style>