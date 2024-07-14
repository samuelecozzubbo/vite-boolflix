<script>

export default{
  name: "AppCard",
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
    },
    starRating() {
      // Convert the vote from 1 to 10 scale to 1 to 5 scale
      return Math.ceil(this.info.vote_average / 2);
    },
    emptyStars() {
      // Calculate the number of empty stars
      return 5 - this.starRating;
    },
    }
}
</script>

<template>
    <div class="film">
        <div class="card">
            <div class="poster">
                <img v-if="info.poster_path" :src="`https://image.tmdb.org/t/p/w342/${info.poster_path}`" alt="movie-poster">
                <img v-else src="/public/image_not_found.png" alt="image not found">
            </div>
            <div class="poster-info">
                <div class="title">
                    <strong>Titolo:</strong> {{ info.title }}
                </div>
                <div class="originalTitle">
                    <strong>Titolo originale:</strong> {{ info.original_title }}
                </div>
                <div class="language">
                    <img v-if="flagUrl" :src="flagUrl" alt="Flag" class="flag"/>
                    <span v-else>{{ info.original_language }}</span>
                </div>
                <div class="rank">
                    <div class="stars">Rank: 
                        <i v-for="n in starRating" :key="'filled-' + n" class="fas fa-star filled"></i>
                        <i v-for="n in emptyStars" :key="'empty-' + n" class="far fa-star"></i>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/general.scss' as *;


.film {
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

.film:hover .card {
    transform: rotateY(180deg);
}

.poster, .poster-info {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
}

.poster {
    background-color: black;
  img {
    width: 100%;
    height: 100%;
  }
}

.poster-info {
    background-color: black;
    color: white;
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

.stars {
  display: flex;
  align-items: center;
}

.filled {
  color: gold;
}

.far, .fas {
  margin-right: 5px;
}
</style>
