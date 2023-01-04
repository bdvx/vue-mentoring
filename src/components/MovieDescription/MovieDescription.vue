<template lang="">
    <div class="description-wrapper">
        <div class="wrapper">
            <img class="poster" alt="poster" :src="require(`@/assets/${selectedMovie.image}`)" />
        </div>
        <div class="wrapper">
            <div class="title-wrapper">
                <span class="title">{{selectedMovie.title}}</span>
                <span class="rating">{{selectedMovie.rating}}</span>
             </div>
            <div class="genre">{{selectedMovie.genre}}</div>
            <div class="year-length">
                <span class="year">
                    <span class="red">{{selectedMovie.year}}</span>
                    year
                </span>
                <span class="length">
                    <span class="red">{{fixed}}</span>
                    min
                </span>
            </div>
            <div class="description">
                {{selectedMovie.description}}
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'MovieDescription',
  computed: {
    fixed() {
      return Math.round(+this.selectedMovie.length);
    },
    ...mapState([
      'selectedMovie',
    ]),
  },
};
</script>
<style scoped>
.poster{
    width: 300px;
    height: 500px;
}
.description-wrapper{
    width:100%;
    text-align: left;
}
.wrapper{
    display: inline-block;
    margin: 65px;
    vertical-align: top;
}
.wrapper div{
    color:white;
}
.title{
    font-size: 60px;
    margin-right: 30px;
}
.title-wrapper{
    margin-top: 30px;
}
.rating{
    font-size: 32px;
    font-weight: 300;
    border: 1px solid white;
    border-radius: 50px;
    padding: 15px;
    color: #a1e66f;
    vertical-align: super;
}
.genre{
    margin: 20px 0;
}
.red{
    font-size: 30px;
    color: #f65261;
    font-weight: 300;
}
.year{
    margin-right: 40px;
}
.year-length{
    margin-top: 55px;
}
.description{
    margin-top: 50px;
    width: 80%;
}
</style>
