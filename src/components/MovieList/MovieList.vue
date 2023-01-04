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
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'MovieList',
  components: { MovieCard },
  methods: {
    ...mapActions({
      fetchMovies: 'fetchMovies',
    }),
  },
  computed: {
    ...mapState({
      movies: (state) => state.movies,
    }),
    ...mapGetters({
      sortedMovies: 'sortedMovies',
      sortedAndSearchedMovies: 'sortedAndSearchedMovies',
    }),
  },
  mounted() {
    this.fetchMovies();
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
