<template>
  <div class="container">
    <p class="find-movie">Find your movie</p>
    <SearchBar />
    <p class="search-by">Search by <Toggle :options="sortOptions" ></Toggle></p>
    <MovieList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchBar from '@/components/SearchBar/SearchBar.vue';
import MovieList from '@/components/MovieList/MovieList.vue';
import Toggle from '@/components/Toggle/Toggle.vue';

export default defineComponent({
  name: 'MainPage',
  components: { SearchBar, MovieList, Toggle },
  data() {
    return {
      sortOptions: [
        { value: 'title', name: ' By Title' },
        { value: 'body', name: ' By Body' },
      ],
    };
  },
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

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
}
</style>
