<template>
  <section id="work" class="work">
    <div class="container lg-container">
      <div class="section-title">
        <Icon name="emojione:pencil" />
        <h2>{{ $t('work') }}</h2>
      </div>
      <div class="work__cards" v-if="data?.data.length">
        <WorkCard v-for="(item, key) in data.data" :key="key" :data="item" />
      </div>
    </div>
  </section>
</template>
<script setup>
import WorkCard from "~/components/pages/home/work/WorkCard.vue";

const { find } = useStrapi()
const { locale } = useI18n()

const { data, pending, refresh, error } = await useAsyncData(
  'works', () => find('works', { populate: '*', locale: locale.value })
)
defineComponent({ name: 'Work' })
</script>