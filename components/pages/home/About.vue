<template>
  <section class="about-section">
    <div class="container lg-container">
      <div class="section-title">
        <Icon name="emojione:raised-back-of-hand" />
        <h2 class="">{{ $t('about.title') }}</h2>
      </div>
      <div class="about-section__row">
        <div class="about-section__info" v-html="$t('about.content')"></div>
        <div class="about-section__image">
          <img src="@/assets/images/avatar/1.png" alt="">
          <button class="about-section__btn" @click="() => $router.push(localePath('/about'))">
            <img class="btn__down" src="@/assets/images/btn/resume.svg" alt="">
            <img class="btn__scroll-text" src="@/assets/images/btn/resume-text.svg" alt="">
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const localePath = useLocalePath()
defineComponent({ name: 'AboutSection' })
</script>