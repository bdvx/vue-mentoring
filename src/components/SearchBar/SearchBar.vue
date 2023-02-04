<template>
    <input class="search" :value="value" @input="updateInput($event.target.value)" type="text" />
    <MyButton label="SEARCH" :onClick="emitInput"></MyButton>
</template>

<script>
import MyButton from '../Button/Button.vue';

export default {
  name: 'SearchBar',
  components: { MyButton },
  props: {
    searchQuery: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      value: '',
    };
  },
  methods: {
    emitInput() {
      this.$emit('update:value', this.value);
    },
    updateInput(value) {
      this.value = value;
    },
  },
  watch: {
    searchQuery() {
      this.updateInput(this.searchQuery);
    },
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
