import { shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import MovieDescription from './MovieDescription.vue';

describe('MovieDescription component tests', () => {
  let wrapper;
  const params = {
    image: 'jackie.jpg',
    title: 'TestMovie',
    year: '1999',
    genre: 'Action',
    description: 'Test Description',
    length: '150.5',
    rating: '4.5',
  };
  let store; const
    state = {
      selectedMovie: params,
    };
  beforeAll(() => {
    store = new Vuex.Store({
      state,
    });
    wrapper = shallowMount(MovieDescription, {
      propsData: params,
      global: {
        mocks: {
          $store: store,
        },
      },
    });
  });
  it('Should render with selected text', () => {
    expect(wrapper.find('.title').text()).toBe(params.title);
    expect(wrapper.find('.year .red').text()).toBe(params.year);
    expect(wrapper.find('.genre').text()).toBe(params.genre);
    expect(wrapper.find('.rating').text()).toBe(params.rating);
    expect(wrapper.find('.length .red').text()).toBe(`${Math.round(+params.length)}`);
    expect(wrapper.find('.description').text()).toBe(params.description);
  });
});
