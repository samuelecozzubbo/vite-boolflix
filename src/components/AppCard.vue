<script>
export default{
  name: "AppCard",
}
</script>

<template>
    <div class="card">
        <div class="title">
            <strong>Titolo:</strong>Ritorno al Futuro
        </div>
        <div class="originalTitle">
            <strong>Titolo originale:</strong>Back to future
        </div>
        <div class="language">
            English
        </div>
        <div class="rank">
            Voto: 5
        </div>
    </div>
    
    
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/general.scss' as *;

.card{
    background-color: black;
    color: white;
    height: 300px;
}

</style>