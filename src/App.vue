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
}


</script>

<template>
  <AppHeader/>
  
</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
