<template>
    <div class="in-genre">
        <div class="genres-list" v-for="result in results">
            <div class="poster-genres-list">
                <router-link :to="'/More/'+result.id"><img :src="'http://image.tmdb.org/t/p/w92'+result.poster_path" alt=""></router-link>
            </div>
            <div class="overview-genres-list">
                <h3>{{ result.title }}</h3>
                <p>{{ result.overview }}</p>
            </div>
        </div>
    </div>

</template>
<script>
import axios from "axios"
export default {
  name: "genres",
  data () {
    return {
        results: [],
        sameGenresFilmsEndPoint:
            "https://api.themoviedb.org/3/discover/movie?api_key=b7f7d13f7fb8d9fa2709ae92515f4247&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=" +
            this.$route.params.id +
            " ",
        genres:[],
        flmsInGenres:"https://api.themoviedb.org/3/genre/movie/list?api_key=b7f7d13f7fb8d9fa2709ae92515f4247&language=en-US"    
    }
  },
  created() {
    this.getSameGenresFilms ()
  },
  methods: {
    getSameGenresFilms () {
      axios
        .get(this.sameGenresFilmsEndPoint)
        .then(response => {
          this.results = response.data.results
        })
        .catch(error => {
          console.log("genre error")
          console.log(error)
        });
    }
  }
}
</script>

