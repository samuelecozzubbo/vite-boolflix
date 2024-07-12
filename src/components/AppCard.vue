<script>
export default{
  name: "AppCard",
  props: ['info'],
}
</script>

<template>
    <div class="card">
        <div class="title">
            <strong>Titolo:</strong>{{ info.title }}
        </div>
        <div class="originalTitle">
            <strong>Titolo originale:</strong>{{ info.original_title }}
        </div>
        <div class="language">
            {{ info.original_language }}
        </div>
        <div class="rank">
            {{ info.vote_average }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/general.scss' as *;

.card{
    background-color: black;
    color: white;
}
</style>