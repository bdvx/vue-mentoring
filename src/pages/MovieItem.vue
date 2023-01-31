<template lang="">
    <div v-if="selectedMovie($route.params.id)">
        <MovieDescription :movie="selectedMovie($route.params.id)"
        />
        <div class="genre-wrapper">
          <div class="genre">Films by {{selectedMovie($route.params.id).genre}} genre</div>
        </div>
        <MovieList :genre="selectedMovie($route.params.id).genre" />
    </div>
    <div class="no-films" v-else>
        <span class="no-films-text">
        No films found
        </span>
    </div>
</template>
<script>
import MovieList from '@/components/MovieList/MovieList.vue';
import MovieDescription from '@/components/MovieDescription/MovieDescription.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'MovieItem',
  components: { MovieList, MovieDescription },
  computed: {
    ...mapGetters(['selectedMovie']),
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
