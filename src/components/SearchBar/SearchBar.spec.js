import { mount } from '@vue/test-utils';
import SearchBar from './SearchBar.vue';

describe('SearchBar component tests', () => {
  let wrapper;
  it('Should call emit function when button is clicked', () => {
    wrapper = mount(SearchBar);
    const emitInput = jest.fn();
    wrapper.find('.search').setValue('test');
    wrapper.find('.button').trigger('click');
    expect(wrapper.emitted('update:value')).toBeTruthy();
  });
  it('Should call update function when text is typed', () => {
    wrapper = mount(SearchBar);
    const updateInput = jest.fn();
    wrapper.vm.updateInput = updateInput;
    wrapper.find('.search').setValue('test');
    expect(updateInput).toHaveBeenCalled();
  });
});
