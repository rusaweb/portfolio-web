<template>
  <div class="page__content">
    <div class="container">
      <div class="first__screen">
        <h1 class="first__screen-title">
          {{$t('first_screen.title')}}
          <Icon class="animate-bounce" name="emojione:waving-hand" />
        </h1>
        <p class="first__screen-content">
          <span v-html="$t('first_screen.subtitle')"></span>
          <span class="years">
            5 <Icon name="emojione:smiling-face-with-sunglasses" />
          </span>
          <span v-html="$t('first_screen.years')"></span>
        </p>
        <button class="first__screen-btn" @click="() => scrollElement()">
          <img class="btn__down" src="@/assets/images/btn/down.svg" alt="">
          <img class="btn__scroll-text" src="@/assets/images/btn/scroll-text.svg" alt="">
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
defineComponent({name: 'FirstScreen'})
const scrollElement = () => {
 var element = document.getElementById("work");
 element.scrollIntoView({behavior: "smooth"});
}
</script>