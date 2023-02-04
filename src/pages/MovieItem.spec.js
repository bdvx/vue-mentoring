import { shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import MovieItem from './MovieItem.vue';

describe('MovieItem page tests', () => {
  let wrapper;
  const params = [{
    image: 'jackie.jpg',
    title: 'TestMovie 1',
    year: '1999',
    genre: 'Action',
    description: 'Test Description',
    length: '150.5',
    rating: '4.5',
    id: 1,
  }, {
    image: 'jackie.jpg',
    title: 'TestMovie 2',
    year: '1998',
    genre: 'Action2',
    description: 'Test Description2',
    length: '160.5',
    rating: '4.9',
    'release date': '5.12.2002',
    id: 2,
  }];
  const mockRoute = {
    params: {
      id: 1,
    },
  };
  const movieFn = jest.fn();
  const getters = {
    selectedMovie: () => movieFn,
  };
  let store;
  const state = {
    movies: params,
  };
  it('Should render with selected text', () => {
    store = new Vuex.Store({
      state,
      getters,
    });
    wrapper = shallowMount(MovieItem, {
      global: {
        mocks: {
          $store: store,
          $route: mockRoute,
        },
      },
    });
    expect(wrapper.vm.$route.params.id).toBe(mockRoute.params.id);
    expect(movieFn).toBeCalledWith(mockRoute.params.id);
  });
});
