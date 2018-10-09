<template>
  <div class="home">
    <div class="search-container">
      <h1>Search film</h1>
        <input type="text" placeholder="Search title.." /> <!--v-model="search"-->
        <label>Search title:</label>
    </div>
    <div class="like">
      <a href="/likeList">list</a>
    </div>
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
            <button v-on:click.prevent="likeFilm()" type="submit">like list</button>
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
import LikeList from "./LikeList";

export default {
  name: "home",
  components: {
    HelloWorld,
    bus
  },
  data() {
    return {
      search: "",
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
    },
    likeFilm() {
      bus.$emit("addToList");
      console.log("like");
    }
  }
  // computed: {
  //   results() {
  //     return this.results.filter(result => {
  //       return result.title.toLowerCase().includes(this.search.toLowerCase())
  //     })
  //     //return this.customers;
  //   }
  // }
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
.search-container {
  position: relative;
  padding: 20px 0px 25px;
  margin-left: auto;
  margin-right: auto;
  width: 250px;
}
.search-container label {
  position: absolute;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  /* top: 8px; */
  left: 12px;
  z-index: -1;
  transition: 0.15s all ease-in-out;
}

input {
  padding: 4px 12px;
  color: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.12);
  transition: 0.15s all ease-in-out;
  background: white;
}
input:focus {
  outline: none;
  transform: scale(1.05);
}
input:focus + label {
  font-size: 10px;
  transform: translateY(-18px) translateX(-12px);
}
input::-webkit-input-placeholder {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 100;
}
</style>
