import { nextTick } from 'vue';
import { shallowMount } from '@vue/test-utils';
import MyButton from './Button.vue';

describe('Button component tests', () => {
  let wrapper;
  const handler = jest.fn();
  beforeAll(() => {
    wrapper = shallowMount(MyButton, {
      propsData: {
        label: 'Test',
        onClick: handler,
      },
    });
  });
  it('Should render with selected text', () => {
    expect(wrapper.text()).toBe('Test');
  });
  it('Should call handler function when clicked', () => {
    wrapper.find('button').trigger('click');
    nextTick();
    expect(handler).toBeCalled();
  });
});
