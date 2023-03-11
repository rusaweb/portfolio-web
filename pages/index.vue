<template>
  <FirstScreen />
  <Work />
  <AboutSection />
  <ServicesSection />
  <TestimonialsSections />
  <NewsSections />
</template>
<script setup>
import AboutSection from "~/components/pages/home/About.vue";
import FirstScreen from "~/components/pages/home/FirtScreen.vue";
import ServicesSection from "~/components/pages/home/services/ServicesSection.vue";
import Work from "~/components/pages/home/work/Work.vue";
import NewsSections from "~~/components/pages/home/news/NewsSections.vue";
import TestimonialsSections from "~~/components/pages/home/testimonials/TestimonialsSections.vue";
useHead({
    titleTemplate: 'Portfolio of Ruslan Kurbonboev',
})
</script>