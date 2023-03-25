<template>
    <div class="work__page">
        <AppPageHead title="List of my works"/>
        <div class="container xl-container">
            <div class="work__cards" v-if="data?.data.length">
                <WorkCard v-for="(item, key) in data.data" :key="key" :data="item" />
            </div>
        </div>
    </div>        
</template>

<script setup>
import WorkCard from "~/components/pages/home/work/WorkCard.vue";

const { find } = useStrapi()
const { locale } = useI18n()

const { data, pending, refresh, error } = await useAsyncData(
  'works', () => find('works', { populate: '*', locale: locale.value })
)

useHead({
    titleTemplate: 'Work',
})
</script>