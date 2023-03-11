<template>
  <nuxt-link :to="localePath('/work/' + data.id)" class="work__card" :style="{ background: data.attributes.color_bg }">
    <svg class="absolute top-0 left-0 lg:w-[147px] lg:h-[130px] lg:block hidden" viewBox="0 0 147 130" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M147 1.52588e-05C147 71.797 88.797 130 17 130L4.60464 130C-3.46128 130 -10 123.461 -10 115.395L-10 1.53341e-06L147 1.52588e-05V1.52588e-05Z" :fill="data.attributes.color_element"/>
    </svg>
    <svg class="absolute bottom-0 right-0 lg:w-[301px] lg:h-[558px] lg:block hidden" viewBox="0 0 301 558" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 253.5C0 113.496 113.496 0 253.5 0H275C289.359 0 301 11.6406 301 26V559H0V253.5Z" :fill="data.attributes.color_element"/>
    </svg>
    <div class="work__card-info">
      <h3 class="work__card-title">{{ data.attributes.name }}</h3>
      <h3 class="work__card-tags">
        <span v-for="item in data.attributes.tags.data" :key="item.id" :style="{background: data.attributes.color_element + '11'}">{{item.attributes.name}}</span>
      </h3>
      <h3 class="work__card-content">{{data.attributes.ext}}</h3>
      <h3 class="work__card-btn">
        <button class="btn btn-yellow">Read Case Study <Icon name="mdi:arrow-top-right" /></button>
      </h3>
    </div>
    <div class="work__card-image">
        <img :src="data.attributes.cover.data.attributes.url" alt="">
    </div>
  </nuxt-link>
</template>
<script setup>
const {data} = defineProps(['data'])
const localePath = useLocalePath()
defineComponent({name: 'WorkCard'})
</script>