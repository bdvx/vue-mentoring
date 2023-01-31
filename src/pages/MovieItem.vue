<template lang="">
    <div>
        <MovieDescription :movie="movie"
        />
        <div class="genre-wrapper">
          <div class="genre">Films by {{movie.genre}} genre</div>
        </div>
        <MovieList :genre="movie.genre" />
    </div>
</template>
<script>
import MovieList from '@/components/MovieList/MovieList.vue';
import MovieDescription from '@/components/MovieDescription/MovieDescription.vue';
import { mapState } from 'vuex';

export default {
  name: 'MovieItem',
  components: { MovieList, MovieDescription },
  computed: {
    ...mapState(['movies']),
    movie() {
      return this.movies.filter((m) => m.id === this.$route.params.id);
    },
  },
};
</script>
<style scoped>
.genre-wrapper{
  height: 100px;
  background-color: #555555;
  display: flex;
  align-items: center;
}
.genre{
  margin-left: 215px;
  color: white;
  font-size: 20px;
}
</style>
