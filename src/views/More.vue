<template>
  <div class="more">
    <div class="film-card">
      <div class="film-poster">
        <img src="../img/venom.jpg" alt="">
      </div>
      <div class="film-info">
        <div class="film-title">
          <h2>Film title</h2>
        </div>
        <div class="film-desc">
          <p>When a young nun at a cloistered abbey in Romania takes her own life, a priest with a haunted past and a novitiate on the threshold of her final vows are sent by the Vatican to investigate. Together they uncover…</p>
        </div>
      </div>
    </div>
    <div class="films-carusel" ><!-- -->
      <div class="film-slot" v-for="result in results">
        <a href="#">
          <img :src="'http://image.tmdb.org/t/p/w92'+result.poster_path" alt="">
        </a>
      </div>
    </div>

  </div>
</template>
<script>
import { bus } from "../script/bus.js";
import axios from "axios";

export default {
  name: "more",
  components: {},
  data() {
    return {
      results: null,
      resultsEndpoint:
        "https://api.themoviedb.org/3/movie/335983/similar?api_key=b7f7d13f7fb8d9fa2709ae92515f4247&language=en-US"
    };
  },
  created() {
    this.getSameFilms();
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
  width: 950px;
  margin: 0px auto;
  display: flex;
  flex-wrap: wrap;
}
.film-slot {
  padding: 0px 5px 5px 0px;
}
</style>

