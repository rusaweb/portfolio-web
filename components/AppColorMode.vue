<template>
    <ClientOnly  fallbackTag="div">
        <div class="color__mode" @click="toggleDark()">
            <p v-show="$colorMode.preference === 'dark'">{{$t('color_mode.item_1')}}</p>
            <p v-show="$colorMode.preference === 'light'">{{$t('color_mode.item_2')}}</p>
            <p v-show="$colorMode.preference ===  'system'">{{$t('color_mode.item_3')}}</p>
            <Icon
                :name="$colorMode.preference === 'dark' ? 'ic:round-dark-mode' : $colorMode.preference === 'light' ? 'ic:round-light-mode' : 'ic:round-monitor'"
                size="24" 
            />
        </div>
        <template #fallback>
            <div class="color__mode">
                <Icon class="mr-6 cursor-pointer" name="line-md:loading-loop" size="24" />
            </div>
        </template>
    </ClientOnly>
</template>
<script setup>
const colorMode = useColorMode()
const toggleDark = () => {
    colorMode.preference === 'dark' ? colorMode.preference = 'light' :
        colorMode.preference === 'light' ? colorMode.preference = 'system' :
            colorMode.preference = 'dark';
}
</script>