<template>
    <section class="inner-page__problem">
        <div class="container lg-container">
            <div class="inner-page__problem-content">
                <div class="inner-page__problem-info">
                    <h2>Problem
                        <Icon name="emojione:face-screaming-in-fear" />
                    </h2>
                    <div class="tabs">
                        <button v-for="(item, key) in data" @click="tabEvent(key)" :class="{active: tabIndex === key}">{{ item.name }}</button>
                    </div>
                    <div class="tabs__content">
                        <div class="tabs__item" v-for="(item, key) in data" :class="{active: tabIndex === key}" v-html="item.content"></div>
                    </div>
                </div>
                <div class="inner-page__problem-image">
                    <img src="@/assets/images/work/problem.svg" alt="Problem Image">
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
const { data } = defineProps(['data'])
const tabIndex = ref(0)
const tabEvent = (index) => {
    tabIndex.value = index
}
defineComponent({ name: 'Problem' })
</script>