<script>
import AppCard from './AppCard.vue';
//import state management store
import { store } from '../store';

export default{
  name: "CharactersList",
  components:{
    AppCard,
  },
  data(){
    return{
      store,
    }
  }
}
</script>

<template>
    <section class="container">
        <div class="row">
            <div class="col-6 col-md-4 col-lg-3 mb-5" v-for="film in store.filmList">
                <!-- Componente card -->
                 <AppCard/>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/general.scss' as *;
</style>