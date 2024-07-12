<script>
//import axios
import axios from 'axios';

import AppHeader from './components/AppHeader.vue';

//import state management store
import { store } from './store';

export default{
  name: "App",
  components: {
    AppHeader,
    
  },
  data(){
    return{
      store,
    }
  },
  methods:{
    getFilms(){
      let endPoint = store.apiUrl;
      //Ricerca personalizzata 
      endPoint += `?${store.searchText}`;
      axios.
      get(endPoint)
      .then(result => {
        console.log(result.data.results);
        store.filmList = result.data.results;
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
  
</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
