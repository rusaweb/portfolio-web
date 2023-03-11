<template>
    <div class="news-sections__card">
        <div class="news-sections__card-image">
            <img src="@/assets/images/news/image-1.png" alt="">
        </div>
        <div class="news-sections__card-info">
            By Admin - Developing - July 19, 2022 
        </div>
        <div class="news-sections__card-title">
            <h3>The best design tools in 2022 for prototyping</h3>
        </div>
        <div class="news-sections__card-content">
            <p>It is a long established fact that a reader will be distracted the readable content of a page when looking at its layout.</p>
        </div>
        <div class="news-sections__card-btn">
            <button>{{ $t('news.btn') }} <Icon name="mdi:arrow-top-right" /></button>
        </div>
    </div>
</template>
<script setup>
defineComponent({ name: 'NewsCard' })
</script>