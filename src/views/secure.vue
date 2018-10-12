<template>
  <div class="home" id="secure">
    <div class="top-container">
      <div class="search-container">
        <h1>Search film</h1>
          <input type="text" placeholder="Search title.." v-model="search" />
          <label>Search title:</label>
      </div>
      <div class="like">
        <a href="/likeList">Like List</a>
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
            <button v-on:click.prevent="likeFilm(result)" class="add-to-list" type="submit">add to like list</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "secure",
  components: {},
  props: ["result"],
  data() {
    return {
      search: "",
      results: [],
      endpoint:
        "https://api.themoviedb.org/3/movie/popular?api_key=b7f7d13f7fb8d9fa2709ae92515f4247&language=en-US",
      likeList: []
    };
  },

  created() {
    this.getAllFilms();
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
    likeFilm(result) {
      bus.$emit("addToList", result);
      this.likeList.push(result);
      // console.log("like: " + result.id);
      // console.log("likelist: " + this.likeList);
      // this.likeList.forEach(element => {
      //   console.log(element.id);
      // });
    }
  },
  computed: {
    searchResults() {
      return this.results.filter(result => {
        return result.title.toLowerCase().includes(this.search.toLowerCase());
      });
      //return this.customers;
    }
  }
};
</script>
<style>
#app {
  width: 100%;
}
h1,
h2,
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
  border: 1px solid #cccccc;
  padding: 15px;
  border-radius: 3px;
}
.card-info {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
}
.card-rev p {
  margin: 0px;
  padding-top: 10px;
  font-size: 12px;
  text-align: justify;
  line-height: 15px;
}
.card-but {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}
.card-but .more-info a {
  font-size: 12px;
  text-decoration: none;
  color: blue;
}
.add-to-list {
  border: none;
  border-radius: 3px;
  padding: 8px;
  background-color: blue;
  color: #fff;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 10px;
}
.top-container {
  display: flex;
  margin: 20px 0px;
  justify-content: space-between;
  align-items: center;
}
.like {
}
.like a {
  text-decoration: none;
  font-size: 16px;
  padding: 10px;
  border-radius: 3px;
  background-color: blue;
  color: #fff;
}

.search-container {
  position: relative;
}
.search-container label {
  position: absolute;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
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
