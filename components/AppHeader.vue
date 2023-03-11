<template>
  <div id="header" class="header">
    <div class="container mx-auto">
      <div class="header__content">
        <nuxt-link class="header__logo" :to="localePath('/')">
          <img src="@/assets/images/logo/logo.svg" alt="">
          TASH.<small>WEB</small>
        </nuxt-link>
        <ClientOnly>
          <Teleport :disabled="isMobile" to="body">
            <AppNavbar ref="navbar" :active="isActive" @active="() => hamburgerHandling()" />
          </Teleport>
          <Teleport :disabled="isMobile" to=".navbar">
            <AppTranslate />
            <AppColorMode />
          </Teleport>
        </ClientOnly>
        <div class="hamburger hamburger--slider" @click="() => hamburgerHandling()" :class="{ 'is-active': isActive }">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const localePath = useLocalePath()
const isActive = ref(false)
const isMobile = useMediaQuery('(min-width: 977px)')
const navbar = ref(null)
onClickOutside(navbar, () => {
  if (isActive.value) { 
    hamburgerHandling() 
  }
}
);
const hamburgerHandling = () => {
  isActive.value = !isActive.value
  if (isActive.value) { 
    document.body.style.overflow = 'hidden' 
    document.querySelector('main').style.position = 'relative' 
    document.querySelector('main').style.transform = 'translateX(30%)'
    document.querySelector('main').style.transition = '0.3s all' 
  } else {
    document.body.style.overflow = 'auto'
    document.querySelector('main').style.transform = 'translateX(0%)'
  }
}
</script>

