<template>
    <figure v-intersection="{showImage}" class="image__wrapper">
      <img
        v-if="isImgVisible"
        class="image__item"
        :src="source"
        alt="random image"
      >
      <ImageSpinner
        v-else
        class="image__spinner"
      />
    </figure>
  </template>

<script>
import ImageSpinner from './ImageSpinner.vue';

export default {
  name: 'ImageItem',
  components: {
    ImageSpinner,
  },
  data() {
    return {
      isImgVisible: false,
    };
  },
  methods: {
    showImage() {
      this.isImgVisible = true;
    },
  },
  props: {
    source: {
      type: String,
      required: true,
    },
  },
};
</script>

  <style scoped lang="scss">
  .image {
    &__wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;

      &.loaded {
        .image {
          &__item {
            visibility: visible;
            opacity: 1;
            border: 0;
          }

          &__spinner {
            display: none;
            width: 100%;
          }
        }
      }
    }

    &__item {
      width: 100%;
      border-radius: 4px;
      transition: all 0.4s ease-in-out;
    }
  }
  </style>
