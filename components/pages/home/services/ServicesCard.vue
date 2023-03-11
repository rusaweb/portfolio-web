<template>
    <div class="services__card">
        <div class="services__card-image">
            <Icon :name="data.attributes.icon"/>
        </div>
        <div class="services__card-title">
            {{ data.attributes.title }}
        </div>
        <div class="services__card-subtitle" :class="isActive ? 'line-clamp-3' : 'line-clamp-none'" @click="() => isActive = !isActive">
            {{ data.attributes.content }}
        </div>
        <ul class="services__card-list">
            <li v-for="item in data.attributes.list" :key="item.id">{{item.item}}</li>
        </ul>
    </div>
</template>
<script setup>
const { data } = defineProps(['data'])
const isActive = ref(true)
defineComponent({ name: 'ServicesCard' })
</script>