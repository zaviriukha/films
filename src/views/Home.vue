<template>
  <div class="home">
    <div class="cards-container">
      <div class="card" v-for="result in results">
        <div class="card-img">
          <img alt="" :src="'http://image.tmdb.org/t/p/w154'+result.poster_path">
        </div>
        <div class="card-info">
          <div class="card-title">
            <h3>{{ result.title }}</h3>
          </div>
          <div class="card-rev">
              <p>{{ result.overview }}.</p>
              <!-- <p v-for="genre in genres">
                {{ genre.name }}
              </p> -->
          </div>
          <div class="cerd-but">
            <div>
              <a href="/more">MORE</a>
            </div>
          </div>
        </div>
        <!-- <button>to like list</button> -->
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
import { bus } from "../script/bus.js";

export default {
  name: "home",
  components: {
    HelloWorld,
    bus
  },
  data() {
    return {
      results: null,
      endpoint:
        "https://api.themoviedb.org/3/movie/popular?api_key=b7f7d13f7fb8d9fa2709ae92515f4247&language=en-US&page=1",
      genres: null,
      genresEndpoint:
        "https://api.themoviedb.org/3/genre/movie/list?api_key=b7f7d13f7fb8d9fa2709ae92515f4247&language=en-US"
    };
  },
  created() {
    this.getAllFilms();
    this.getGenre();
  },
  methods: {
    getAllFilms() {
      axios
        .get(this.endpoint)
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
    }
  }
};
</script>
<style>
#app {
  width: 100%;
}
h3 {
  margin: 0px;
}
.home,
.more {
  max-width: 1200px;
  margin: 0px auto;
}
.cards-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.card {
  width: 480px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.card-info {
  margin-left: 20px;
}
.card-rev p {
  margin: 0px;
  padding-top: 10px;
  font-size: 13px;
  text-align: justify;
  line-height: 13px;
}
</style>
