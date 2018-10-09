
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import HomeContainer from "./components/tabbar/HomeContainer.vue"
import MemberContainer from "./components/tabbar/MemberContainer.vue"
import FindContainer from "./components/tabbar/FindContainer.vue"
import CartContainer from "./components/tabbar/CartContainer.vue"
import PersonContainer from "./components/tabbar/PersonContainer.vue"
import NavFruit from "./components/nav/NavFruit.vue"
import NavVeg from "./components/nav/NavVeg.vue"
import NavFood from "./components/nav/NavFood.vue"
import NavOil from "./components/nav/NavOil.vue"
import ProductList from "./components/product/ProductList.vue"
import Login from "./components/login/Login.vue"

Vue.use(Router)
export default new Router({
  routes: [
    { 
      path: '/home', component: HomeContainer
    },
    { 
      path:"/",redirect:"/home"
    },
    {
      path: '/member',
      component: MemberContainer
    },
    {
      path:"/find",
      component:FindContainer
    },
    {
      path:"/cart",
      component:CartContainer
    },   
    {
      path:"/person",
      component:PersonContainer
    },
    {
      path:"/person/login",
      component:Login
    },
    {
      path:"/home/navfruit",
      component:NavFruit
    },
    {
      path:"/home/navveg",
      component:NavVeg
    },
    {
      path:"/home/navfood",
      component:NavFood
    },
    {
      path:"/home/navoil",
      component:NavOil
    },
    {
      path:"/home/productlist/:id",
      component:ProductList,
      name:"productlist"
    }
  ]
})
