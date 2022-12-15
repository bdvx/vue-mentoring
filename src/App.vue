<template>
  <div>
    <span class="netflix-roulette netflix-roulette-top">
      <span class="netflix">netflix</span>
      <span class="roulette">roulette</span>
    </span>
    <MainPage msg="Welcome to Your Vue.js + TypeScript App"/>
    <span class="netflix-roulette netflix-roulette-bottom">
      <span class="netflix">netflix</span>
      <span class="roulette">roulette</span>
    </span>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainPage from './pages/Main.vue';

export default defineComponent({
  name: 'App',
  components: {
    MainPage,
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
}

.netflix-roulette-bottom{
  background-color: #555555;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 95%;
  padding: 20px 0;
}
.netflix{
  font-weight: 700;
}
</style>
