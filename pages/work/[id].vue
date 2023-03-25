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

const localePath = useLocalePath()
const route = useRoute()
const router = useRouter()
const { findOne } = useStrapi()
const { locale } = useI18n()

watch(locale, (value) => {
    const localizations = data.value.data.attributes.localizations.data
    const id = localizations.filter(e => e.attributes.locale === value).at(0).id
    router.push(localePath('/work/' + id))
})

const { data, pending, refresh, error } = await useAsyncData(
  'works', () => findOne('works', route.params.id, { populate: ['project_details', 'team_members.avatar', 'problem', 'images', 'tags', 'localizations'], locale: locale.value })
)
const {name, project_summary, project_details, team_members, problem, images, tags, solution} = data.value.data?.attributes
useHead({
    titleTemplate: () => 'Work - ' + name,
})
</script>