import { createStore } from 'vuex';
import list from '@/assets/movies.json';

export default createStore({
  state: {
    movies: [],
    selectedMovie: {},
    searchQuery: '',
  },
  getters: {
  },
  mutations: {
    setSelectedMovie(state, movie) {
      state.selectedMovie = movie;
    },
    setMovies(state, movies) {
      state.movies = movies;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },

  },
  actions: {
    async fetchMovies({ commit }) {
      // Can replace with remote data fetching in future
      const response = list;

      commit('setMovies', response);
    },
  },
});
