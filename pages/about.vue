<template>
    <div class="about-me">
        <AboutMe />
        <ExperienceMap />
        <SkillsSection />
    </div>
</template>

<script setup>
import AboutMe from '~~/components/pages/about/AboutMe.vue';
import ExperienceMap from '~~/components/pages/about/experience/ExperienceMap.vue';
import SkillsSection from '~~/components/pages/about/Skills.vue';
useHead({
    titleTemplate: 'About Me',
})
</script>