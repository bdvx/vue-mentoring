<template>
    <input class="search" v-model="localValue" type="text" v-bind="$attrs" />
    <MyButton label="SEARCH"></MyButton>
</template>

<script>

import { computed } from 'vue';
import MyButton from '../Button/Button.vue';

export default {
  name: 'SearchBar',
  components: { MyButton },
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue'],
  setup(props, context) {
    const localValue = computed({
      get: () => props.modelValue,
      set: (value) => context.emit('update:modelValue', value),
    });
    return {
      localValue,
    };
  },
};
</script>

<style>
.search {
    font-family: 'Montserrat', sans-serif!important;
    width: 45%;
    border-radius: 5px;
    height: 50px;
    background: rgba(66,66,66, 0.8);
    font-size: 20px;
    color: white;
    padding: 0 15px;
}
</style>
