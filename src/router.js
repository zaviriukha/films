import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from "./views/login.vue"
import SecureComponent from "./views/secure.vue"
import MoreComponent from "./views/More.vue"

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
      component: SecureComponent,
      props: true
    },
    {
      path: "/More/:id",
      name: "more",
      component: MoreComponent
    }

  ]
})