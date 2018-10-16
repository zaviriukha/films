<template>
<div>
    <div class="wrap-favorite"  v-for="info in likeList"><!--v-for="info in likeList"-->
        <h1>Favorites films</h1>
        <div class="favorite-film">
            <div class="favorite-img">
                <img src="../assets/venom.jpg" alt="">
                <!-- <img alt="" :src="'http://image.tmdb.org/t/p/w154'+info.poster_path"> -->
            </div>
            <div class="favorite-overview">
                <div class="favorite-title">
                   <h2>ertyuio</h2>
                   {{ info.title }}
                </div>
                <div class="favorite-desc">
                    <p>rtyui cvgbhnj dfghj</p>
                    <!-- {{ info.overview }} -->
                </div>
                <div>
                    <button class="romove-from-list">Remove</button>
                </div>
            </div>
        </div>
    </div>
</div>    
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex"


export default {
    name:'favorites',
    data () {
        return {
            likeList: []    
        }
    },
    created(){
        this.getList()        
    },
    methods:{
        getList() {
            return store.state.likeList;
        }
    }
}
</script>
