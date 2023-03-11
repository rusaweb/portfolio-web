<template>
    <div class="container">
        <div class="page__head">
            <span>
                <Icon 
                    class="mr-3 cursor-pointer"
                    name="line-md:arrow-left"
                    size="24" 
                />
                Back To Home
            </span>
            <h1>{{ title }}</h1>
        </div>
    </div>
</template>

<script setup>
const {title} = defineProps(['title'])
</script>