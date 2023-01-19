import ImageSpinner from './ImageSpinner.vue';
import { shallowMount } from '@vue/test-utils';

describe('ImageSpinner component tests', () => {
    let wrapper;
    it('Should show component parts(circles)', () => {
        wrapper = shallowMount(ImageSpinner)
        expect(wrapper.find('.ripple__circle').exists()).toBeTruthy();
        expect(wrapper.find('.ripple__inner-circle').exists()).toBeTruthy();
    })
})