<script>

export default{
  name: "AppCardSeries",
  props: ['info'],
  computed: {
    flagUrl() {
      // Mappa delle lingue ai nomi delle immagini delle bandiere
      const languageToFlag = {
        'en': '/flags/united-states.png',
        'it': '/flags/italy.png',
        'fr': '/flags/france.png',
        'es': '/flags/spain.png',
      };
      // Ritorna l'URL della bandiera o null se non disponibile
      return languageToFlag[this.info.original_language] || null;
    }
    }
}
</script>

<template>
    <div class="series">
        <div class="title">
            <strong>Titolo:</strong>{{ info.original_name }}
        </div>
        <div class="originalTitle">
            <strong>Titolo originale:</strong>{{ info.overview }}
        </div>
        <div class="language">
            <img v-if="flagUrl" :src="flagUrl" alt="Flag" class="flag"/>
            <span v-else>{{ info.original_language }}</span>
        </div>
        <div class="rank">
            {{ info.vote_average }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/general.scss' as *;


.series{
    background-color: black;
    color: white;
    width: 100%;
    height: 300px;
    overflow-y: auto;
    scrollbar-width: none;
}

    .flag{
      width: 30px;
      height: auto;
    }
</style>