import { shallowMount } from '@vue/test-utils';
import { nextTick } from 'vue';
import Toggle from './Toggle.vue';

describe('Toggle component tests', () => {
  let wrapper;
  const propsData = {
    firstOption: 'FirstOption',
    secondOption: 'SecondOption',
    toggleName: 'Test',
  };
  it('Should show label text', () => {
    wrapper = shallowMount(Toggle, { propsData });
    expect(wrapper.findAll('.toggle-label')[0].text()).toBe(propsData.firstOption);
    expect(wrapper.findAll('.toggle-label')[1].text()).toBe(propsData.secondOption);
  });
  it('Should call emit function when button is clicked', async () => {
    wrapper = shallowMount(Toggle, { propsData });
    const input = wrapper.find(`#${propsData.secondOption}`);
    await input.setValue('input value');
    nextTick();
    expect(wrapper.emitted('update:value')).toBeTruthy();
  });
});
