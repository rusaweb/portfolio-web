<template>
    <div class="testimonials-sections__card">
        <div class="testimonials-sections__item">
            <div class="testimonials-sections__item-image avatar-image">
                <img :src="data.attributes.avatar.data.attributes.url" alt="">
            </div>
            <div class="testimonials-sections__item-text">
                <h3>{{data.attributes.name}}</h3>
                <p>{{data.attributes.role}}</p>
            </div>
        </div>
        <div class="testimonials-sections__item">
            <div class="testimonials-sections__item-image sm:block hidden">
                <img src="@/assets/images/stick/reviews.svg" alt="">
            </div>
            <div class="testimonials-sections__item-text">
                {{data.attributes.content}}
            </div>
        </div>
    </div>
</template>
<script setup>
const {data} = defineProps(['data'])
defineComponent({name: 'TestimonialsCard'})
</script>