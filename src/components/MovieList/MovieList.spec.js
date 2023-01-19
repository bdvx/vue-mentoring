import { shallowMount, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import MovieList from './MovieList.vue';

describe('MovieList component tests', () => {
  let wrapper;
  const params = [{
    image: 'jackie.jpg',
    title: 'TestMovie 1',
    year: '1999',
    genre: 'Action',
    description: 'Test Description',
    length: '150.5',
    rating: '4.5',
  }, {
    image: 'jackie.jpg',
    title: 'TestMovie 2',
    year: '1998',
    genre: 'Action2',
    description: 'Test Description2',
    length: '160.5',
    rating: '4.9',
    'release date': '5.12.2002',
  }];
  const getters = {
    sortedMovies: () => {},
    sortedAndSearchedMovies: () => params,
  };
  let store; 
  const fetchMovies = jest.fn(); 
  const state = {
    movies: params,
  }; 
  const actions = {
      fetchMovies,
    };
  it('Should render with selected text', () => {
    store = new Vuex.Store({
      state,
      actions,
      getters,
    });
    wrapper = mount(MovieList, {
      global: {
        mocks: {
          $store: store,
        },
      },
    });
    params.forEach((p, i) => {
        expect(wrapper.findAll('.movie .title')[i].text()).toBe(p.title)
        expect(wrapper.findAll('.movie .year')[i].text()).toBe(p.year)
        expect(wrapper.findAll('.movie .genre')[i].text()).toBe(p.genre)
    }); 
  });
  it('Should show text with no films if none presented', () => {
        let getters = {
            sortedMovies: () => {},
            sortedAndSearchedMovies: () => [],
        }
        store = new Vuex.Store({
            state: { movies: [] },
            actions,
            getters
          })
        wrapper = shallowMount(MovieList, {
            global: {
                mocks: {
                  $store: store
                }
              }
        })
        expect(wrapper.find('.no-films-text').text()).toBe('No films found')
    })
});
