<template>
  <header class="header">
    <div class="container">
      <nav class="header__nav">
        <NuxtLink to="/" class="header__logo">
          <img src="@/assets/icons/logo.svg" alt="">
          <span>Logo</span>
        </NuxtLink>

        <ul class="header__links">
          <li>
            <NuxtLink to="/">Main</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/convert">Convert</NuxtLink>
          </li>
        </ul>

        <div class="header__dropdown">
          <div class="header__currency" @click="isMenuVisible = !isMenuVisible" :class="{'active': isMenuVisible}">
            <img class="header__flag" v-if="currency.activeCurrency.name === 'rub'" src="@/assets/icons/ru.svg" alt="">
            <img class="header__flag" v-if="currency.activeCurrency.name === 'usd'" src="@/assets/icons/us.svg" alt="">
            <img class="header__flag" v-if="currency.activeCurrency.name === 'eur'" src="@/assets/icons/eu.svg" alt="">
            <span>{{ currency.activeCurrency.name }}</span>
            <img src="@/assets/icons/dropdown.svg" alt="">
          </div>

          <ul class="header__currencies-list" :class="{ 'active': isMenuVisible}">
            <li v-for="curr in currency.supportedCurrencies"
              :class="{ 'active': curr.name === currency.activeCurrency.name }" @click="setCurrency(curr.name)">
              <img v-if="curr.name === 'rub'" src="@/assets/icons/ru.svg" alt="">
              <img v-if="curr.name === 'usd'" src="@/assets/icons/us.svg" alt="">
              <img v-if="curr.name === 'eur'" src="@/assets/icons/eu.svg" alt="">
              <span>{{ curr.name }}</span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const currency = useCurrency();

const isMenuVisible = ref(false);

const setCurrency = (name: 'rub' | 'eur' | 'usd') => {
  if (name !== currency.activeCurrency.name) {
    currency.setCurrency(name)
    isMenuVisible.value = false;
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding: 10px 0;
  background-color: $grey;

  &__nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__links {
    display: flex;
    align-items: center;

    li {
      margin-right: 20px;
    }

    a {
      color: $black;

      &.router-link-active {
        color: $orange;
      }

      &:hover:not(.router-link-active) {
        color: $grey2;
      }
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

  &__logo {
    display: flex;
    align-items: center;
    color: $black;

    img {
      display: block;
      margin-right: 4px;
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