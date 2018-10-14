<template>
    <div class="in-genre">
        <h1>
            movies in the genre {{this.$route.params.id}}
        </h1>
        <div class="genres-list" v-for="result in results">
            <div class="poster-genres-list">
                <router-link :to="'/More/'+result.id"><img :src="'http://image.tmdb.org/t/p/w92'+result.poster_path" alt=""></router-link>
            </div>
            <div class="overview-genres-list">
                <h3>
                    {{ result.title }}
                </h3>
                <p>
                    {{ result.overview }}
                </p>
            </div>
        </div>
    </div>

</template>
<script>
import axios from "axios";
export default {
  name: "genres",
  data() {
    return {
      results: [],
      sameGenresFilmsEndPoint:
        "https://api.themoviedb.org/3/discover/movie?api_key=b7f7d13f7fb8d9fa2709ae92515f4247&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=" +
        this.$route.params.id +
        " "
    };
  },
  created() {
    this.getSameGenresFilms();
  },
  methods: {
    getSameGenresFilms() {
      axios
        .get(this.sameGenresFilmsEndPoint)
        .then(response => {
          this.results = response.data.results;
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
.in-genre {
  max-width: 1200px;
  margin: 0px auto;
}
.in-genre h1 {
  text-align: center;
  text-transform: uppercase;
  margin: 20px 0px;
}
.genres-list {
  display: flex;
  border: 1px solid #e3e3e3;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 3px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.overview-genres-list {
  margin-left: 20px;
}
.overview-genres-list h3 {
  font-size: 22px;
}
.overview-genres-list p {
  font-size: 14px;
  margin: 10px 0px;
  text-align: justify;
}
</style>

