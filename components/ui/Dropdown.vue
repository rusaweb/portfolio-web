<template>
    <div class="dropdown" id="clickOutside">
        <div @click="open" class="dropdown__trigger">
            <slot></slot>
        </div>
        <div @click="onClick" class="dropdown__content" :class="{active}">
            <slot name="content"></slot>
        </div>
    </div>
</template>
<script setup>
import {onMounted, onUnmounted} from "#imports";

const active = ref(false)
const open = () => active.value = !active.value
const close = () => active.value = false
const onClick = (event) => ['A', 'LI'].includes(event.target.tagName) && close()
const clickOutside = event => !document.getElementById('clickOutside').contains(event.target) && close()

onMounted(() => {
  document.addEventListener('click', clickOutside)
})
onUnmounted(() => {
  document.removeEventListener('click', clickOutside)
})
</script>