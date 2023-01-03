import { createStore } from 'vuex';
import list from '@/assets/movies.json';

export default createStore({
  state: {
    movies: [],
    selectedMovie: {},
    searchQuery: '',
    selectedSort: 'release date',
    searchBy: 'TITLE',
    isDescription: false,
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
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    setSearchBy(state, searchBy) {
      state.searchBy = searchBy;
    },
    setIsDescription(state, isDescription) {
      state.isDescription = isDescription;
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
