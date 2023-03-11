<template>
    <section class="testimonials-sections">
        <div class="container lg-container">
            <div class="section-title">
                <Icon name="emojione:writing-hand" />
                <h2>{{ $t('testimonials.title') }}</h2>
            </div>
            <div class="testimonials-sections__content">
                <h2>{{ $t('testimonials.subtitle') }}</h2>
                <div class="testimonials-sections__list" v-if="data">
                    <TestimonialsCard v-for="item in data.data" :key="item.id" :data="item"/>
                </div>
            </div>
            
        </div>
    </section>
</template>
<script setup>
import TestimonialsCard from './TestimonialsCard.vue';
const { find } = useStrapi()
const {locale} = useI18n()
const { data, pending, refresh, error } = await useAsyncData(
  'restaurant', () => find('testimonials', {populate: ['avatar'], locale: locale.value})
)
defineComponent({ name: 'TestimonialsSection' })
</script>