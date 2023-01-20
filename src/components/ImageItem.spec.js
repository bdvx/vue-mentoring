import { shallowMount } from '@vue/test-utils';
import { nextTick } from 'vue';
import ImageItem from './ImageItem.vue';

describe('ImageItem component tests', () => {
  let wrapper;
  const propsData = {
    source: '@/assets/jackie.jpg',
  };
  beforeAll(() => {
    wrapper = shallowMount(ImageItem, { propsData });
  });
  it('Should not show image by default', () => {
    expect(wrapper.find('.image__item').exists()).toBe(false);
  });
  it('Should not show image by default', () => {
    wrapper.vm.showImage();
    nextTick();
    expect(wrapper.find('.image__item')).toBeTruthy();
  });
});
