<template>
    <NuxtLink :to="buttonItem.link" class="main-button-item" :class="{'secondary-background': secondary}">
        <i :class="`fa-${buttonItem.icon[0]} fa-${buttonItem.icon[1]} main-button-icon`"></i>
        <p class="main-button-title">{{ buttonItem.title }}</p>
    </NuxtLink>
</template>


<script setup>
const props = defineProps({
    buttonItem: {
        type: Object,
        default: {title: 'Regarder', icon: ['solid', 'circle-play'], link: '#'}
    },

    secondary: {
        type: Boolean,
        default: false
    }
})
</script>


<style scoped>
.main-button-item {
    @apply px-6 py-3 bg-green rounded-xl flex items-center justify-center gap-2.5;
}

.secondary-background {
    @apply bg-button;
}

.main-button-icon {
    @apply text-xl leading-5 text-white ;
}

.main-button-title {
    @apply text-base font-medium tracking-wide text-white;
}
</style>