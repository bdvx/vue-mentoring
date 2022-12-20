<template lang="">
    <div>
        <MovieDescription
          :title="selectedMovie.title"
          :year="selectedMovie.year"
          :genre="selectedMovie.genre"
          :description="selectedMovie.description"
          :length="selectedMovie.length"
          :image="selectedMovie.image"
          :rating="selectedMovie.rating"
        />
        <div class="genre-wrapper">
          <div class="genre">Films by {{selectedMovie.genre}} genre</div>
        </div>
        <MovieList :genre="selectedMovie.genre" />
    </div>
</template>
<script>
import MovieList from '@/components/MovieList/MovieList.vue';
import MovieDescription from '@/components/MovieDescription/MovieDescription.vue';
// import { mapState } from 'vuex';

export default {
  name: 'MovieItem',
  components: { MovieList, MovieDescription },
  props: {
    selectedMovie: Object,
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
