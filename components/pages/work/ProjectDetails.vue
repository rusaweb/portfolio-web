<template>
    <section class="inner-page__project-details">
        <div class="container xl-container">
            <div class="inner-page__project-details__image">
                <div v-for="(item, key) in images?.data" @click="() => showImg(key)" :key="item.id" class="details__image">
                    <img :src="item.attributes.url" alt="">
                </div>
            </div>
        </div>
        <div class="container lg-container">
            <div class="inner-page__project-details__row">
                <div class="inner-page__project-details__summary">
                    <h2>{{$t('work_page.summary')}}</h2>
                    <div v-html="project_summary"></div>
                    <div class="tags">
                        <a href="#!" v-for="item in tags?.data" :key="item.id">{{ item.attributes.name }}</a>
                    </div>
                </div>
                <div class="inner-page__project-details__details">
                    <h2>{{$t('work_page.details')}}</h2>
                    <ul>
                        <li>
                            <span>{{$t('work_page.role')}} :</span>
                            <p>{{ project_details?.role }}</p>
                        </li>
                        <li>
                            <span>{{$t('work_page.duration')}} :</span>
                            <p>{{ project_details?.duration }}</p>
                        </li>
                        <li>
                            <span>{{$t('work_page.website')}} :</span>
                            <a :href="project_details?.link" target="_blank">{{$t('work_page.visit')}}</a>
                        </li>
                        <li>
                            <span>{{$t('work_page.tools')}} :</span>
                            <p>{{ project_details?.tools }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <VueEasyLightbox :visible="visibleRef" :imgs="images?.data.map(e => e.attributes.url)" :index="indexRef" @hide="onHide"></VueEasyLightbox>
</template>
<script setup>
import VueEasyLightbox from "vue-easy-lightbox";
const {data} = defineProps(['data'])
const {tags, images, project_summary, project_details} = data
const visibleRef = ref(false)
const indexRef = ref(0)

const showImg = (index) => {
    indexRef.value = index
    visibleRef.value = true
}
const onHide = () => visibleRef.value = false

defineComponent({ name: 'ProjectDetails' })
</script>