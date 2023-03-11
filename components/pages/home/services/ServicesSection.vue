<template>
  <section class="services-section">
    <div class="container lg-container">
      <div class="section-title">
        <Icon name="emojione:gear" />
        <h2 class="">{{$t('services.title')}}</h2>
      </div>
      <div class="services-section__row">
        <div class="services-section__cards" v-if="data">
          <ServicesCard 
            v-for="item in data.data" 
            :key="item.id" 
            :data="item"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import ServicesCard from './ServicesCard.vue';
const { find } = useStrapi()
const {locale} = useI18n()
const { data, pending, refresh, error } = await useAsyncData(
  'services', () => find('services', {populate: ['list'], locale: locale.value})
)
defineComponent({name: 'ServicesSection'})
</script>