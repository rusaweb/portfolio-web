<template>
    <div class="container lg-container">
        <div class="experience-map">
            <div class="experience-map__list">
                <ExperienceList v-for="item in data" :key="item.id" :data="item"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import ExperienceList from '~/components/pages/about/experience/ExperienceList.vue';
const data = ref([
    {
        lvl: {
            icon: 'emojione:books',
            title: 'Education',
        },
        informations: [
            {
                date: "2013 to 2014",
                title: "University of California, Berkeley",
                subtitle: "Graduate of Visual Communication Design.",
                content: "Lorem Ipsum is simply dummy text of the printing and. Lorem Ipsum has been the industry's standard dummy text unknown printer took a galley centuries,",
            },
            {
                date: "2013 to 2014",
                title: "University of California, Berkeley",
                subtitle: "Graduate of Visual Communication Design.",
                content: "Lorem Ipsum is simply dummy text of the printing and. Lorem Ipsum has been the industry's standard dummy text unknown printer took a galley centuries,",
            },
        ]
    },
    {
        lvl: {
            icon: 'emojione:briefcase',
            title: 'Work Experience',
        },
        informations: [
            {
                date: "2022 current",
                title: "Fraxos",
                subtitle: "Seniour Design",
                content: "Lorem Ipsum is simply dummy text of the printing and. Lorem Ipsum has been the industry's standard dummy text unknown printer took a galley centuries,",
            },
            {
                date: "2017 to 2019",
                title: "Graphic Designer",
                subtitle: "Branding & Graphic Design",
                content: "Lorem Ipsum is simply dummy text of the printing and. Lorem Ipsum has been the industry's  text unknown printer took the galley centuries,",
            },
            {
                date: "2015 to 2016",
                title: "Codesign",
                subtitle: "Web Manager",
                content: "Lorem Ipsum is simply dummy text of the printing and. Lorem Ipsum has been the industry.",
            },
        ]
    },
])
defineComponent({ name: "ExperienceMap" })
</script>