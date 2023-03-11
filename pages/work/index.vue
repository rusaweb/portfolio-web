<template>
    <div class="work__page">
        <AppPageHead title="List of my works"/>
        <div class="container xl-container">
            <div class="work__cards">
                <ClientOnly>
                    <WorkCard v-for="(item, key) in works" :key="key" :data="item"/>
                </ClientOnly>
            </div>
        </div>
    </div>        
</template>

<script setup>
import WorkCard from "~/components/pages/home/work/WorkCard.vue";
import works from '~/data/works.json';
useHead({
    titleTemplate: 'Work',
})
</script>