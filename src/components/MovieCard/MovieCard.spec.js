import { shallowMount } from '@vue/test-utils';
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
    id: 1,
  };
  const mockRoute = {
    params: {
      id: 1,
    },
  };
  const mockRouter = {
    push: jest.fn(),
  };
  beforeAll(() => {
    wrapper = shallowMount(MovieCard, {
      propsData: params,
      global: {
        mocks: {
          $route: mockRoute,
          $router: mockRouter,
        },
      },
    });
  });
  it('Should render with selected text', () => {
    expect(wrapper.find('.title').text()).toBe(params.title);
    expect(wrapper.find('.year').text()).toBe(params.year);
    expect(wrapper.find('.genre').text()).toBe(params.genre);
  });
  test('Should redirect to the movie page', async () => {
    await wrapper.find('.movie').trigger('click');

    expect(mockRouter.push).toHaveBeenCalledTimes(1);
    expect(mockRouter.push).toHaveBeenCalledWith('/movie/1');
  });
});
