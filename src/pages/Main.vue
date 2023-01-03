<template>
  <div class="container">
    <p class="find-movie">Find your movie</p>
    <SearchBar :searchQuery="searchQuery" @update:value="setSearchQuery" />
    <div class="search-by"><span class="search-by-title">Search by</span>
      <Toggle
        :firstOption="title"
        :secondOption="genre"
        v-model:value="searchBy"
        toggleName="search"
      />
    </div>
    <div class="sort-wrapper">
      <div class="sort">
        <span class="sort-by-genre">Sort by genre</span>
        <Toggle
          :firstOption="date"
          :secondOption="rating"
          @update:value="setSelectedSort"
          toggleName="sort"
        />
      </div>
    </div>
    <MovieList
    :changeIsDescription="changeIsDescription"
    :selectedSort="selectedSort"
    :searchQuery="searchQuery"
    :searchBy="searchBy"
     />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchBar from '@/components/SearchBar/SearchBar.vue';
import MovieList from '@/components/MovieList/MovieList.vue';
import Toggle from '@/components/Toggle/Toggle.vue';
import { mapState, mapMutations } from 'vuex';

export default defineComponent({
  name: 'MainPage',
  components: { SearchBar, MovieList, Toggle },
  data() {
    return {
      title: 'TITLE',
      genre: 'GENRE',
      date: 'RELEASE DATE',
      rating: 'RATING',
    };
  },
  computed: {
    ...mapState([
      'selectedSort',
      'searchQuery',
      'searchBy',
    ]),
  },
  methods: {
    ...mapMutations({
      setSearchBy: 'setSearchBy',
      setSearchQuery: 'setSearchQuery',
      setSelectedSort: 'setSelectedSort',
    }),
  },
  props: {
    changeIsDescription: Function,
  },
});
</script>

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
  margin-left: 20%;
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
