<template>
    <div class="container lg-container">
        <div class="experience-map">
            <div class="experience-map__list">
                <ExperienceList :data="data.data.attributes.educations" icon="emojione:books" title="Education"/>
                <ExperienceList :data="data.data.attributes.work_experience" icon="emojione:briefcase" title="Work Experience"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import ExperienceList from '~/components/pages/about/experience/ExperienceList.vue';
const { find } = useStrapi()
const {locale} = useI18n()
const { data, pending, refresh, error } = await useAsyncData(
  'education', () => find('education', {populate: ['educations', 'work_experience'], locale: locale.value})
)
defineComponent({ name: "ExperienceMap" })
</script>