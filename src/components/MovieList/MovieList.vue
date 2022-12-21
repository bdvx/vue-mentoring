<template>
    <div class="movies-container" v-if="sortedAndSearchedMovies.length">
        <MovieCard
            v-for="movie in sortedAndSearchedMovies"
            :title="movie.title"
            :genre="movie.genre"
            :year="movie.year"
            :image="movie.image"
            :key="movie.title"
            :description="movie.description"
            :length="movie.length"
            :rating="movie.rating"
            :onClick="(params) => changeIsDescription(true, params)"
        />
    </div>
    <div class="no-films" v-else>
        <span class="no-films-text">
        No films found
        </span>
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
  methods: {

  },
  props: {
    changeIsDescription: Function,
    selectedSort: {
      type: String,
      default: 'release date',
    },
    searchQuery: {
      type: String,
      default: '',
    },
    searchBy: {
      type: String,
      default: 'title',
    },
  },
  computed: {
    sortedMovies() {
      return [...this.movies]
        .sort((movie1, movie2) => movie1[this.selectedSort.toLowerCase()]
          ?.localeCompare(movie2[this.selectedSort.toLowerCase()]));
    },
    sortedAndSearchedMovies() {
      return this.sortedMovies
        .filter((movie) => movie[this.searchBy.toLowerCase()]
          .toLowerCase().includes(this.searchQuery.toLowerCase()));
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
.no-films{
    height: 500px;
    background-color: #232323;
    padding: 10px;
}
.no-films-text{
    color: white;
    font-weight: 300;
    font-size: 56px;
    margin-top: 110px;
    display: block;
}
</style>
