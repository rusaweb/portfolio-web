<template>
    <div class="inner-page">
        <AppPageHead :title="name"/>
        <ProjectDetails :data="{project_summary, project_details, images, tags}"/>
        <TeamMember :data="team_members"/>
        <Problem :data="problem"/>
        <Solution :data="solution"/>
    </div>
</template>

<script setup>
import AppPageHead from '~~/components/AppPageHead.vue';
import Problem from '~~/components/pages/work/Problem.vue';
import ProjectDetails from '~~/components/pages/work/ProjectDetails.vue';
import Solution from '~~/components/pages/work/Solution.vue';
import TeamMember from '~~/components/pages/work/TeamMember.vue';


const route = useRoute()
const { findOne } = useStrapi()
const { locale } = useI18n()

const { data, pending, refresh, error } = await useAsyncData(
  'works', () => findOne('works', route.params.id, { populate: ['project_details', 'team_members.avatar', 'problem', 'images', 'tags'], locale: locale.value })
)
const {name, project_summary, project_details, team_members, problem, images, tags, solution} = data.value.data?.attributes
useHead({
    titleTemplate: () => 'Work - ' + name,
})
</script>