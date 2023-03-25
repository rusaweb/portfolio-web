<template>
    <div class="skills">
        <div class="container lg-container">
            <div class="skills__section">
                <div class="skills__section-item">
                    <h3>
                        <Icon name="emojione:pushpin" />{{ $t('skills.features') }}
                    </h3>
                    <ul>
                        <li v-for="item in data?.data.attributes.Features" :key="item.id">
                            <Icon name="line-md:circle-to-confirm-circle-transition" />
                            {{ item.item }}
                        </li>
                    </ul>
                </div>
                <div class="skills__section-item">
                    <h3>
                        <Icon name="emojione:graduation-cap" />{{ $t('skills.knowledge') }}
                    </h3>
                    <div class="skills__section-item__list">
                        <ul>
                            <li v-for="item in data?.data.attributes.Knowledge.slice(0, 4)" :key="item.id">
                                <Icon name="line-md:circle-to-confirm-circle-transition" />
                                {{ item.item }}
                            </li>
                        </ul>
                        <ul>
                            <li v-for="item in data?.data.attributes.Knowledge.slice(4)" :key="item.id">
                                <Icon name="line-md:circle-to-confirm-circle-transition" />
                                {{ item.item }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const { find } = useStrapi()
const { locale } = useI18n()
const { data, pending, refresh, error } = await useAsyncData(
    'skill', () => find('skill', { populate: ['Features', 'Knowledge'], locale: locale.value })
)
defineComponent({ name: "SkillsSection" })
</script>