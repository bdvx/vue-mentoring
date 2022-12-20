<template>
    <input class="search" :value="value" @input="updateInput($event.target.value)" type="text" />
    <MyButton label="SEARCH" :onClick="emitInput"></MyButton>
</template>

<script>
import MyButton from '../Button/Button.vue';

export default {
  name: 'SearchBar',
  components: { MyButton },
  data() {
    return {
      value: '',
    };
  },
  methods: {
    emitInput() {
      this.$emit('update:input', this.value);
    },
    updateInput(value) {
      this.value = value;
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
