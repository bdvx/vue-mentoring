import { shallowMount } from '@vue/test-utils';
import MovieDescription from './MovieDescription.vue';

describe('MovieDescription component tests', () => {
  let wrapper;
  const movie = {
    image: 'jackie.jpg',
    title: 'TestMovie',
    year: '1999',
    genre: 'Action',
    description: 'Test Description',
    length: '150.5',
    rating: '4.5',
    id: 1,
  };
  beforeAll(() => {
    wrapper = shallowMount(MovieDescription, {
      propsData: { movie },
    });
  });
  it('Should render with selected text', () => {
    expect(wrapper.find('.title').text()).toBe(movie.title);
    expect(wrapper.find('.year .red').text()).toBe(movie.year);
    expect(wrapper.find('.genre').text()).toBe(movie.genre);
    expect(wrapper.find('.rating').text()).toBe(movie.rating);
    expect(wrapper.find('.length .red').text()).toBe(`${Math.round(+movie.length)}`);
    expect(wrapper.find('.description').text()).toBe(movie.description);
  });
});
