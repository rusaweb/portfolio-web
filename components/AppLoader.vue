<template>
    <transition>
    <div v-if="load" class="loader">
        <span>h</span>
        <span>e</span>
        <span>l</span>
        <span>l</span>
        <span>o</span>
    </div>
    </transition>
</template>
<script setup>
const { load } = defineProps(['load'])
</script>