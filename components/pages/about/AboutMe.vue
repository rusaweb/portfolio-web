<template>
    <div class="container">
        <div class="about-me__section">
            <div class="about-me__image">
                <img :src="data?.data.attributes.Image.data.attributes.url" alt="This is me">
            </div>
            <div class="about-me__info">
                <h1>{{ data?.data.attributes.Name }} </h1>
                <div v-html="data?.data.attributes.content"></div>
                <div class="about-me__buttons">
                    <button class="btn" @click="downLoadFile(data?.data.attributes.cv.data.attributes.url)">Resume <Icon name="line-md:download-loop"></Icon></button>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/ruslan-kurbanbayev-56b637258" target="_blank">LinkedIn</a></li>
                        <li><a href="https://instagram.com/ruslan__web?igshid=ZDdkNTZiNTM=" target="_blank">Instagram</a></li>
                        <li><a href="https://t.me/tashweb" target="_blank">Telegram</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const { find } = useStrapi()
const {locale} = useI18n()
const { data, pending, refresh, error } = await useAsyncData(
  'about', () => find('about', {populate: ['Image', 'cv'], locale: locale.value})
)
const downLoadFile = (url) => {
    const a = document.createElement('a')
    a.href = url
    a.target = "_blank"
    a.download = url.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}
defineComponent({name: 'AboutMe'})
</script>