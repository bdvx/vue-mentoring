<template>
  <button type="button" class="button" @click="onClick" :style="style">{{ label }}</button>
</template>

<script>
import './button.css';

export default {
  name: 'my-button',

  props: {
    label: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function,
      default: () => alert('Clicked!')
    },
  },
};
</script>
