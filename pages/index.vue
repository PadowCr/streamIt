<template>
    <MovieSlide :movieItem="movie"></MovieSlide>
</template>


<script setup>
import axios from 'axios';

const movie = ref([]);

const options = {
  method: 'GET',
  url: 'https://moviesdatabase.p.rapidapi.com/titles/search/title/John%20Wick:%20Chapter%204',
  params: {
    exact: 'true',
    titleType: 'movie'
  },
  headers: {
    'X-RapidAPI-Key': 'f5d82d44a6msh4e8209605109d99p1d9d6cjsnb42d91dcc489',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
}

onMounted(async () => {
    try {
	    const response = await axios.request(options);
	    movie.value = response.data.results[0]
        console.log(movie.value)
    } 
    
    catch (error) {
        console.error(error);
    }
});
</script>

