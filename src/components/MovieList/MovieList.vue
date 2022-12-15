<template>
    <div class="movies-container">
        <MovieCard
        v-for="movie in movies"
        :title="movie.title"
        :genre="movie.genre"
        :year="movie.year"
        :image="movie.image"
        :key="movie.title"
        />
    </div>
  </template>

<script>
import MovieCard from '@/components/MovieCard/MovieCard.vue';
import list from '@/assets/movies.json';

export default {
  name: 'MovieList',
  components: { MovieCard },
  data() {
    return {
      movies: list,
    };
  },
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
.movies-container{
    background-color: #232323;
    display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
}

</style>
