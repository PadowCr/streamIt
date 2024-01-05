<template>
    <NuxtLink :to="buttonItem.link" class="button-item">
        <i :class="`uil button-icon uil-${buttonItem.icon}`"></i>
        <p class="button-title">{{ buttonItem.title }}</p>
    </NuxtLink>
</template>


<script setup>
const props = defineProps({
    buttonItem: {
        type: Object,
        default: {title: 'Regarder', icon: 'bookmark', link: '#'}
    }
})
</script>


<style scoped>
.button-item {
    @apply px-6 py-3 bg-background rounded-xl flex items-center justify-center gap-2.5;
    @apply border border-solid border-white;
}

.button-icon {
    @apply text-xl leading-5 text-white ;
}

.button-title {
    @apply text-base font-medium tracking-wide text-white;
}
</style>