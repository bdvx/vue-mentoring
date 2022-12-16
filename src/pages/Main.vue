<template>
  <div class="container">
    <p class="find-movie">Find your movie</p>
    <SearchBar />
    <div class="search-by"><span class="search-by-title">Search by</span>
      <Toggle :firstOption="title" :secondOption="genre" toggleName="search"/>
    </div>
    <div class="sort-wrapper">
      <div class="sort">
        <span class="sort-by-genre">Sort by genre</span>
        <Toggle :firstOption="date" :secondOption="rating" toggleName="sort"/>
      </div>
    </div>
    <MovieList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchBar from '@/components/SearchBar/SearchBar.vue';
import MovieList from '@/components/MovieList/MovieList.vue';
import Toggle from '@/components/Toggle/Toggle.vue';

export default defineComponent({
  name: 'Main',
  components: { SearchBar, MovieList, Toggle },
  data() {
    return {
      title: 'TITLE',
      genre: 'GENRE',
      date: 'RELEASE DATE',
      rating: 'RATING',
    };
  },
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.container {
  margin-top: 60px;
  height: 100%;
}
.find-movie {
  text-align: left;
  width: 100%;
  display: block;
  text-transform: uppercase;
  font-size: 38px;
  margin-left: 105px;
  color: white;
}
.search-by{
  color: white;
  display: flex;
  align-items: baseline;
}
.search-by-title{
  text-transform: uppercase;
  margin: 30px 15px 0 380px;
  font-weight: 300;
}
.sort-wrapper{
  height: 100px;
  background-color: #555555;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.sort{
  margin-right: 300px;
  color: white;
  font-size: 20px;
  display: flex;
  margin-top: 35px;
  align-items: baseline;
}
.sort-by-genre{
  text-transform: uppercase;
  margin-right: 30px;
  font-weight: 300;
}
</style>
