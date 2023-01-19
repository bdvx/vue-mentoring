import { nextTick } from 'vue';
import { shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import MovieCard from './MovieCard.vue';

describe('MovieCard component tests', () => {
  let wrapper;
  const params = {
    image: 'jackie.jpg',
    title: 'TestMovie',
    year: '1999',
    genre: 'Action',
    description: 'Test Description',
    length: '150',
    rating: '4.5',
  };
  let store; const
    mutations = {
      setIsDescription: jest.fn(),
      setSelectedMovie: jest.fn(),
    };

  beforeAll(() => {
    store = new Vuex.Store({
      mutations,
    });
    wrapper = shallowMount(MovieCard, {
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
    expect(wrapper.find('.year').text()).toBe(params.year);
    expect(wrapper.find('.genre').text()).toBe(params.genre);
  });
  it('Should call handler function when clicked', () => {
    wrapper.find('.movie').trigger('click');
    nextTick();
    expect(mutations.setIsDescription).toBeCalled();
    expect(mutations.setSelectedMovie).toBeCalled();
  });
});
