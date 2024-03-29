import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    movies: [],
    searchQuery: '',
    selectedSort: 'release date',
    searchBy: 'TITLE',
  },
  getters: {
    sortedMovies(state) {
      return [...state.movies]
        .sort((movie1, movie2) => movie1[state.selectedSort.toLowerCase()]
          ?.localeCompare(movie2[state.selectedSort.toLowerCase()]));
    },
    sortedAndSearchedMovies(state, getters) {
      return getters.sortedMovies
        .filter((movie) => movie[state.searchBy.toLowerCase()]
          .toLowerCase().includes(state.searchQuery.toLowerCase()));
    },
    selectedMovie: (state) => (id) => state.movies.find((m) => +m.id === +id),
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    setSearchBy(state, searchBy) {
      state.searchBy = searchBy;
    },

  },
  actions: {
    async fetchMovies({ commit }) {
      try {
        const response = await axios.get('https://my-json-server.typicode.com/bdvx/vue-mentoring/movies');
        commit('setMovies', response.data);
      } catch (e) {
        console.error('Axios movies error response', e);
      }
    },
  },
});
