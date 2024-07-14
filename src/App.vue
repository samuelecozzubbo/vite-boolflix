<script>
//import axios
import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

//import state management store
import { store } from './store';


export default{
  name: "App",
  components: {
    AppHeader,
    AppMain,
  },
  data(){
    return{
      store,
    }
  },
  methods:{
    getFilms(){
      let endPoint = store.apiUrl;
      let endPointSeries = store.apiUrlSeries;
      //Ricerca personalizzata 
      endPoint += `?${store.searchText}`;
      endPointSeries += `?${store.searchText}`;
      axios.
      get(endPoint)
      .then(result => {
        console.log(result.data.results);
        store.filmList = result.data.results;
      })
      .catch(err =>{
        console.log(err);
      });
      axios.
      get(endPointSeries)
      .then(result => {
        console.log(result.data.results);
        store.seriesList = result.data.results;
      })
      .catch(err =>{
        console.log(err);
      })
    },
  } 
}


</script>

<template>
  <AppHeader @search="getFilms"/>
  <AppMain/>
  
</template>

<style lang="scss">
@use './styles/general.scss' as *;
body{
  background-color: #434343;
}
</style>
