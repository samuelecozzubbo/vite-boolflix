<script>
import AppSearch from './AppSearch.vue';

export default{
    name: 'AppHeader',
    components:{
        AppSearch,
    }
}
</script>

<template>
    <header>
        <AppSearch @search="$emit('search')"/>  
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';

header{
    background-color: black;
}

</style>