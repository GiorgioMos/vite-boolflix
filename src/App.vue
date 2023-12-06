<script>
import axios from 'axios';
import { store } from './store.js';
import MyHeader from './components/MyHeader.vue';
import MyMain from './components/MyMain.vue';
import CardFilm from './components/CardFilm.vue';


export default {
  components: {
    MyHeader,
    MyMain,
    CardFilm,

  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getFilm() {

      let urlApi = 'https://api.themoviedb.org/3/search/movie?api_key=2d6841a37fd674dfe6e37d212e5b383a&language=it-IT&query=';
      urlApi += store.input.replace(" ", "+")

      axios.get(urlApi).then(response => {
        this.store.filmListApi = response.data.results;
      });

      if (this.store.filmListApi.length == 0) {
        this.store.risultatoFilm = true
      }

      let urlApiTv = 'https://api.themoviedb.org/3/search/tv?api_key=2d6841a37fd674dfe6e37d212e5b383a&language=it_IT&query='
      urlApiTv += store.input.replace(" ", "+")

      axios.get(urlApiTv).then(response => {
        this.store.tvListApi = response.data.results;
      });

      if (this.store.tvListApi.length == 0) {
        this.store.risultatoTv = true
      }
      console.log(this.store.filmListApi)
      console.log(this.store.tvListApi)

      // console.log(store.filmListApi)


    }
  }
}
</script>

<template>
  <body>
    <MyHeader @cercaFilm="getFilm" />
    <MyMain></MyMain>
  </body>
</template>

<style lang="scss">
@use './styles/general.scss';

body {
  background-color: rgba($color: #000000, $alpha: 0.5);
  min-height: 100vh;
}
</style>


<!-- Ho dovuto ricreare il repository 3 volte perche quando facevo npm run dev la console mi diceva che mancava il file main js anche se era presente -->
