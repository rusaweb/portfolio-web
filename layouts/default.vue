<template>
    <AppLoader :load="load" />
    <main class="wrapper">
        <AppHeader />
        <slot />
        <AppFooter />
    </main>
</template>
<script setup>
const load = ref(true)
onMounted(() => {
    setTimeout(() => {load.value = false}, 1500)
})
</script>