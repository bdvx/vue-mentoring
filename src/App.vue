<template>
  <div class="container">
    <span class="netflix-roulette netflix-roulette-top" @click="changeIsDescription(false)">
      <span class="netflix">netflix</span>
      <span class="roulette">roulette</span>
      <span
      class="return"
      v-if="isDescription"
      @click="changeIsDescription(false)"
      >
        <img class="return-image" alt="return" :src="require('@/assets/search.svg')" />
      </span>
    </span>
    <MovieItem v-if="isDescription" :selectedMovie="selectedMovie"/>
    <MainPage v-else :changeIsDescription="changeIsDescription" />
    <span class="netflix-roulette netflix-roulette-bottom">
      <span class="netflix">netflix</span>
      <span class="roulette">roulette</span>
    </span>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { mapActions } from 'vuex';
import MainPage from './pages/Main.vue';
import MovieItem from './pages/MovieItem.vue';

export default defineComponent({
  name: 'App',
  components: {
    MainPage,
    MovieItem,
  },
  data() {
    return {
      isDescription: false,
      selectedMovie: null,
    };
  },
  methods: {
    changeIsDescription(value, selectedMovie) {
      this.isDescription = value;
      if (selectedMovie) {
        this.selectedMovie = selectedMovie;
      }
    },
  },
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap');
#app {
  font-family: 'Montserrat', sans-serif!important;
  height: 100%;
  position: absolute;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image:  linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5) ),
  url("./assets/background.png");
  background-repeat: repeat;
}
.netflix-roulette{
  font-size: 26px;
  color: #f65261;
}

.netflix-roulette-top{
  text-align: left;
  display: block;
  margin-left: 65px;
  margin-top: 25px;
  cursor: pointer;
}

.netflix-roulette-bottom{
  background-color: #555555;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px 0;
}
.netflix{
  font-weight: 700;
}
.return{
  cursor: pointer;
  float: right;
}
.return-image{
  width: 30px;
  position: absolute;
  right: 0;
  margin-right: 25px;
}
.container{
  position: relative;
  padding-bottom: 35px;
}
</style>
