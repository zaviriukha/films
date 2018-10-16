import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from "./views/login.vue"
import SecureComponent from "./views/secure.vue"
import MoreComponent from "./views/More.vue"
import GenresComponent from "./views/Genres.vue"
import FavoritesComponent from "./views/Favorites.vue"

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: {
        name: "login"
      }
    },
    {
      path: "/login",
      name: "login",
      component: LoginComponent
    },
    {
      path: "/secure",
      name: "secure",
      component: SecureComponent
    },
    {
      path: "/More/:id",
      name: "more",
      component: MoreComponent
    },
    {
      path: "/Genres/:id",
      name: "genres",
      component: GenresComponent
    }, {
      path: "/Favorites",
      name: "favorites",
      component: FavoritesComponent
    }

  ]
})