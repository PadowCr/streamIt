<template>
    <div class="tag-item-container">{{ tagItem }}</div>
</template>


<script setup>
const props = defineProps({
    tagItem: {
        type: String,
        default: "Film"
    }
})
</script>


<style scoped>
.tag-item-container {
    @apply px-4 py-1 bg-background rounded-2xl;
    @apply text-sm font-medium tracking-wide text-white capitalize;
}
</style>