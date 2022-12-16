<template>
    <div
    class="movie"
    @click="$router.push({name: 'movie',
     params: {id: title.toLowerCase().replace(/\s/g, '')}})">
        <img class="poster" alt="poster" :src="require(`@/assets/${image}`)" />
        <p class="title-group"><span class="title">{{title}}</span>
        <span class="year">{{year}}</span></p>
        <span class="genre">{{genre}}</span>
    </div>
  </template>

<script>

export default {
  name: 'MovieCard',
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    length: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
.poster{
    width: 300px;
    height: 500px;
}
.movie{
    color: white;
    cursor: pointer;
}
.title-group {
    margin-bottom: 5px;
}
.title{
    display: inline-block;
    text-align: left;
    width: 39%;
    margin-left: 15px;
}
.year{
    width: 9%;
    display: inline-block;
    font-size: 14px;
    border: white 1px solid;
    border-radius: 3px;
    margin-right: 15px;
}
.genre{
    font-size:14px;
    display: inline-block;
    text-align: left;
    width: 48%;
    margin-bottom: 55px;
}
</style>
