<script>
import AppCard from './AppCard.vue';
//import state management store
import { store } from '../store';
import AppCardSeries from './AppCardSeries.vue';

export default{
  name: "CharactersList",
  components:{
    AppCard,
    AppCardSeries,
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
          <h3 v-if="store.filmList.length !== 0">Films</h3>
            <div class="col-6 col-md-3 col-lg-2 mb-1" v-for="film in store.filmList">
                <!-- Componente card -->
                 <AppCard :info="film"/>
            </div>
            <h3 v-if="store.seriesList.length !== 0">Series</h3>
            <div class="col-6 col-md-3 col-lg-2 mb-1" v-for="series in store.seriesList">
                <!-- Componente card -->
                 <AppCardSeries :info="series"/>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/general.scss' as *;
</style>