<template>
    <div class="experience-map__item">
        <div class="experience-map__item-lvl">
            <Icon :name="data.lvl.icon"></Icon>
            {{ data.lvl.title }}
        </div>
        <div class="experience-map__item-informations">
            <div class="informations__item" v-for="item in data.informations" :key="item.id">
                <div class="informations__item-date">{{ item.date }}</div>
                <div class="informations__item-card">
                    <span>{{ item.date }}</span>
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.subtitle }}</p>
                    <i>{{ item.content }}</i>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const { data } = defineProps(['data'])
defineComponent({ name: "ExperienceList" })
</script>