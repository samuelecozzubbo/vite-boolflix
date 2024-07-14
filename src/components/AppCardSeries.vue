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
        'ja': '/flags/japan.png',
        'ko': '/flags/south-korea.png',
      };
      // Ritorna l'URL della bandiera o null se non disponibile
      return languageToFlag[this.info.original_language] || null;
    }
    }
}
</script>

<template>
    <div class="series">
        <div class="card">
            <div class="poster">
                <img :src="`https://image.tmdb.org/t/p/w342/${info.poster_path}`" alt="series-poster">
            </div>
            <div class="poster-info">
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
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/general.scss' as *;


.series {
  width: 100%;
  height: 300px;
  position: relative;
}

.card {
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.series:hover .card {
  transform: rotateY(180deg);
}

.poster, .poster-info {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
}

.poster {
  img {
    width: 100%;
    object-fit: cover;
  }
}

.poster-info {
  transform: rotateY(180deg);
  padding: 10px;
  overflow-y: auto;
  scrollbar-width: none;

  .flag {
    width: 30px;
    height: auto;
  }
}

.poster-info .flag {
  width: 30px;
  height: auto;
}
</style>