<template>
    <div class="container">
        <div class="page__head">
            <span>
                <Icon 
                    class="mr-3 cursor-pointer"
                    name="line-md:arrow-left"
                    size="24" 
                />
                {{$t('work_page.back')}}
            </span>
            <h1>{{ title }}</h1>
        </div>
    </div>
</template>

<script setup>
const {title} = defineProps(['title'])
</script>