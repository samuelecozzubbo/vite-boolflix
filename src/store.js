import { reactive } from 'vue'

export const store = reactive({
    searchText: "",
    apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=d51c4fc7695a3c4fde0490057413228a&query=",
    apiUrlSeries: "https://api.themoviedb.org/3/search/tv?api_key=d51c4fc7695a3c4fde0490057413228a&language=it_IT&query=",
    filmList: [],
    seriesList: [],
    imgPath: "https://image.tmdb.org/t/p/",
    loading: false,
});
