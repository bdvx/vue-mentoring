<template>
    <div class="movies-container">
        <MovieCard
            v-for="movie in $store.state.movies"
            :title="movie.title"
            :genre="movie.genre"
            :year="movie.year"
            :image="movie.image"
            :key="movie.title"
            :description="movie.description"
            :length="movie.length"
        />
    </div>
  </template>

<script>
import MovieCard from '@/components/MovieCard/MovieCard.vue';

export default {
  name: 'MovieList',
  components: { MovieCard },
  data() {
    return {

    };
  },
  methods: {

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
