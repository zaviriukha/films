<template>
  <div class="more">
    <div class="film-card">
      <div class="film-poster">
        <img alt="" :src="'http://image.tmdb.org/t/p/w154'+movie.poster_path">
      </div>
      <div class="film-info">
        <div class="film-title">
             {{ movie.original_title }} 
        </div>
        <div class="film-desc">
          <p>{{movie.overview}}</p>
        </div>
          <p v-for="genre in genres">
            {{ genre.name }}
          </p>
      </div>
    </div>

     <div class="films-carusel" >
      <div class="film-slot" v-for="result in results">
        <a href="#">
          <img :src="'http://image.tmdb.org/t/p/w92'+result.poster_path" alt="">
        </a>
      </div>
    </div>

  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "more",
  components: {},
  data() {
    return {
      results: null,
      resultsEndpoint:
        "https://api.themoviedb.org/3/movie/" +
        this.$route.params.id +
        "/similar?api_key=b7f7d13f7fb8d9fa2709ae92515f4247&language=en-US",
      genres: [],
      genresEndpoint:
        "https://api.themoviedb.org/3/movie/" +
        this.$route.params.id +
        "?api_key=b7f7d13f7fb8d9fa2709ae92515f4247&language=en-US",
      movie: "",
      movieEndpoint:
        "https://api.themoviedb.org/3/movie/" +
        this.$route.params.id +
        "?api_key=b7f7d13f7fb8d9fa2709ae92515f4247&language=en-US"
    };
  },
  created() {
    this.getSameFilms();
    this.getGenre();
    this.getMovieInfo();
  },
  methods: {
    getSameFilms() {
      axios
        .get(this.resultsEndpoint)
        .then(response => {
          this.results = response.data.results;
        })
        .catch(error => {
          console.log("-----error-------");
          console.log(error);
        });
    },
    getGenre() {
      axios
        .get(this.genresEndpoint)
        .then(response => {
          this.genres = response.data.genres;
        })
        .catch(error => {
          console.log("genre error");
          console.log(error);
        });
    },
    getMovieInfo() {
      axios
        .get(this.movieEndpoint)
        .then(response => {
          this.movie = response.data;
        })
        .catch(error => {
          console.log("genre error");
          console.log(error);
        });
    }
  }
};
</script>
<style>
.film-card {
  display: flex;
  justify-content: space-between;
  width: 800px;
  margin: 20px auto;
}
.film-info {
  margin-left: 20px;
}
h2 {
  margin: 0px;
  padding-bottom: 10px;
}
.films-carusel {
  width: 970px;
  margin: 0px auto;
  display: flex;
  flex-wrap: wrap;
}
.film-slot {
  padding: 0px 5px 5px 0px;
}
</style>

