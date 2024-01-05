<template>
    <div class="movie-slide-container">
        <div class="movies-infos-container">
            <div class="left-container">
                <div class="tags-container">
                    <TagItem :tagItem="movieItem.titleType.text"></TagItem>
                </div>

                <div class="texts-container">
                    <p class="movie-title">{{ movieItem.titleText.text }}</p>
                    <p class="movie-subtitle">2h49 • 2023 <span>• Action • Thriller • Crime</span></p>
                    <p class="movie-description">John Wick affronte ses adversaires les plus redoutables dans ce quatrième volet de la série. De New York à Osaka, en passant par Paris et Berlin, John Wick mène un combat contre la Grande Table, la terrible organisation criminelle qui a mis sa tête à prix, en affrontant ses tueurs les plus dangereux</p>
                </div>

                <div class="button-container">
                    <MainButton :buttonItem="{title: 'Regarder', icon: ['solid', 'circle-play'], link: '#'}"></MainButton>
                    <MainButton :buttonItem="{title: 'Bande Annonce', icon: ['regular', 'circle-play'], link: '#'}" :secondary="true"></MainButton>
                    <Button :buttonItem="{title: 'WatchList', icon: 'bookmark', link: '#'}"></Button>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
const props = defineProps({
    movieItem: {
        type: Object
    }
})
</script>


<style scoped>
.movie-slide-container {
    background: linear-gradient(0deg,#0D0C0F 0.83%, #0D0C0F 0.84%, rgba(13, 12, 15, 0.85) 18.5%, 
    rgba(13, 12, 15, 0.00) 48.81%, rgba(13, 12, 15, 0.28) 78.69%, #0D0C0F 103.18% ), url('/img/movies/johnwick.jpg');
    @apply w-full h-screen flex items-end bg-center bg-cover;
}

.movies-infos-container {
    @apply max-w-[50%] px-16 py-20 flex justify-between items-end;
}


/*------- LEFT CONTAINER -------*/
.left-container {
    @apply flex flex-col justify-end gap-6;
}

.tags-container {
    @apply flex items-center gap-2;
}


.texts-container {
    @apply flex flex-col gap-2;
}

.movie-title {
    @apply text-4xl font-bold tracking-wide text-white capitalize;
}

.movie-subtitle {
    @apply text-base font-medium tracking-wide text-grey1 capitalize;
}

.movie-description {
    @apply text-sm font-normal tracking-wide text-white;
}

.button-container {
    @apply flex items-center gap-6;
}
</style>