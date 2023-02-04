import { shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import App from './App.vue';

describe('App page tests', () => {
  let wrapper;
  const mockRouter = {
    push: jest.fn(),
  };
  const setSearchQuery = jest.fn();
  const mutations = { setSearchQuery };
  beforeAll(() => {
    const store = new Vuex.Store({
      mutations,
    });
    wrapper = shallowMount(App, {
      global: {
        mocks: {
          $router: mockRouter,
          $store: store,
        },
      },
    });
  });
  test('Click on logo should redirect to the main page', async () => {
    await wrapper.find('.netflix-roulette-top').trigger('click');

    expect(setSearchQuery).toHaveBeenCalled();
    expect(mockRouter.push).toHaveBeenCalledTimes(1);
    expect(mockRouter.push).toHaveBeenCalledWith('/');
  });
  test('Return button should redirect to the main page', async () => {
    await wrapper.find('.return').trigger('click');

    expect(setSearchQuery).toHaveBeenCalled();
    expect(mockRouter.push).toHaveBeenCalledTimes(3);
    expect(mockRouter.push).toHaveBeenCalledWith('/');
  });
});
