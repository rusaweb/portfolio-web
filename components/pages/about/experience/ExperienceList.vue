<template>
    <div class="experience-map__item">
        <div class="experience-map__item-lvl">
            <Icon :name="icon"></Icon>
            {{ title }}
        </div>
        <div class="experience-map__item-informations">
            <div class="informations__item" v-for="item in data" :key="item.id">
                <div class="informations__item-date">{{ item.date }}</div>
                <div class="informations__item-card">
                    <span>{{ item.date }}</span>
                    <h3>{{ item.name }}</h3>
                    <p>{{ item.role }}</p>
                    <i>{{ item.content }}</i>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const { data, title, icon } = defineProps(['data', 'title', 'icon'])
defineComponent({ name: "ExperienceList" })
</script>