<template>
    <section class="news-sections">
      <div class="container lg-container">
        <div class="section-title">
          <Icon name="emojione:newspaper" />
          <h2>{{ $t('news.title') }}</h2>
        </div>
        <div class="news-sections__cards">
            <NewsCard />
            <NewsCard />
        </div>
      </div>
    </section>
  </template>
  <script setup>
import NewsCard from './NewsCard.vue';

  defineComponent({name: 'NewsSections'})
  </script>