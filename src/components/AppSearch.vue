<script>
//importazione store per v-model
import { store } from '../store.js';

export default {
    name: 'AppSearch',
    data(){
        return{
        store,
        }
    },
    methods:{
        resetSearch(){
            //svuoto il campo
            store.searchText= "";
            //resetto la pagina
            this.$emit('search');
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row d-flex py-2 align-items-center">
            <div class="col-6">
                <div class="logo">NETFLIX</div>
            </div>
            <div class="col-6">
                <form class="d-flex justify-content-end">
                        <div class="search">
                            <input class="form-control" type="text" id="search" placeholder="Search">
                        </div>
                        <button type="sumbit" class="btn btn-danger mb-2">Search</button>
                </form>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

.form-control{
    background-color: $primary;
}

.logo{
    color: red;
    font-size: 1.5em;
    font-weight: 500;
}
</style>