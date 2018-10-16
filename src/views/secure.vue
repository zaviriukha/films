<template>
  <div class="home" id="secure">
    <div class="top-container">
      <div class="search-container">
        <h1>Search film</h1>
          <input type="text" placeholder="Search title.." v-model="search" />
      </div>
      <div class="like">
        <router-link to="/Favorites">Favorites</router-link>
      </div>
    </div>
    <div class="cards-container">
      <div class="card" v-for="result in searchResults">
        <div class="card-img">
          <img alt="" :src="'http://image.tmdb.org/t/p/w154'+result.poster_path">
        </div>
        <div class="card-info">
          <div class="card-title">
            <h3>{{ result.title }}</h3>
          </div>
          <div class="card-rev">
              <p>{{ result.overview }}.</p>
          </div>
          <div class="card-but">
            <div class="more-info">
              <router-link :to="'/More/'+result.id">MORE...</router-link>
            </div>
            <button v-on:click.prevent="likeFilm(result)" class="add-to-list" type="submit"  >Add to Favorite</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import { mapState, mapActions } from "vuex"
import InfiniteLoading from 'vue-infinite-loading'

export default {
  name: "secure",
  components: {
    InfiniteLoading
  },
  data () {
    return {
      search: "",
      results: [],
      endpoint:
        "https://api.themoviedb.org/3/movie/popular?api_key=b7f7d13f7fb8d9fa2709ae92515f4247&language=en-US",
      cart: '',
      likeList: []
    };
  },

  created () {
    this.getAllFilms ()
  },
  methods: {
    getAllFilms () {
      axios
        .get(this.endpoint)
        .then(response => {
          this.results = response.data.results;
        })
        .catch(error => {
          console.log("-----error getAllFilms-------");
          console.log(error);
        })
    },
    ...mapActions(["likeFilm"])
  },
  computed: {
    searchResults () {
      return this.results.filter(result => {
        return result.title.toLowerCase().includes(this.search.toLowerCase());
      })
    }
  }
}
</script>