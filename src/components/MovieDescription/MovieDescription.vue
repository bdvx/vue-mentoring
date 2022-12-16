<template lang="">
    <div class="description-wrapper">
        <div class="wrapper">
            <img class="poster" alt="poster" :src="require(`@/assets/reservoir.jpg`)" />
        </div>
        <div class="wrapper">
            <div class="title-wrapper">
                <span class="title">Reservoir Dogs</span>
                <span class="mark">4.3</span>
             </div>
            <div class="genre">Oscar Winning Movie</div>
            <div class="year-length">
                <span class="year">
                    <span class="red">2004</span>
                    year
                </span>
                <span class="length">
                    <span class="red">154</span>
                    min
                </span>
            </div>
            <div class="description">
                When a simple jewelry heist goes horribly wrong,
                 the surviving criminals begin to suspect that one of them is a police informant.
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'MovieDescription',
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
.mark{
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
