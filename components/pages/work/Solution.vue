<template>
    <section class="inner-page__solution">
        <div class="container lg-container">
            <div class="inner-page__solution-content">
                <div class="inner-page__solution-info">
                    <h2>{{$t("work_page.solution")}}
                        <Icon name="emojione:white-heavy-check-mark" />
                    </h2>
                    <div class="inner-page__solution-text" v-html="data"></div>
                </div>
                <div class="inner-page__solution-image">
                    <img src="@/assets/images/work/solution.png" alt="solution Image">
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
const { data } = defineProps(['data'])
defineComponent({ name: 'Solution' })
</script>