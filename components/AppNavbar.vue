<template>
  <nav class="navbar" :class="{ active }">
    <div class="hamburger hamburger--slider is-active" @click="() => hamburgerHandling()">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </div>
    <ul class="navbar__list">
      <li class="list-item" @click="() => hamburgerHandling()"><nuxt-link :to="localePath('/')">{{$t('navbar.link_1')}}</nuxt-link></li>
      <li class="list-item" @click="() => hamburgerHandling()"><nuxt-link :to="localePath('/work')">{{$t('navbar.link_2')}}</nuxt-link></li>
      <li class="list-item" @click="() => hamburgerHandling()"><nuxt-link :to="localePath('/about')">{{$t('navbar.link_3')}}</nuxt-link></li>
      <li class="list-item" @click="() => hamburgerHandling()"><nuxt-link :to="localePath('/blog')">{{$t('navbar.link_4')}}</nuxt-link></li>
    </ul>
    
  </nav>
</template>
<script setup>


const localePath = useLocalePath()

const { active } = defineProps(['active'])

const emit = defineEmits(['active'])


const hamburgerHandling = () => {
  if (window.innerWidth < 977) {
    emit('active')
  }
}
</script>