<template>
  <div class="translate">
    <UiDropdown>
      <template #default>
        <div class="translate__current">
          {{ localeProperties.name }}
          <Icon class="ml-2" name="ic:round-keyboard-arrow-down" size="24" />
        </div>
      </template>
      <template #content>
        <ul>
          <li v-for="item in locales.filter(e => e.code !== locale)" :key="item.code">
            <nuxt-link :to="switchLocalePath(item.code)">{{ item.name }}</nuxt-link>
          </li>
        </ul>
      </template>
    </UiDropdown>
  </div>
</template>
<script setup>
const { locales, locale, localeProperties } = useI18n()
</script>