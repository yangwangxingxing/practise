import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.http.options.root = "http://127.0.0.1:3000/"

import MintUI from 'mint-ui';
Vue.use(MintUI);
import "./lib/mui/css/mui.css"
import "./lib/mui/css/mui.min.css"
import "./lib/mui/css/icons-extra.css"  
import "mint-ui/lib/style.css"
Vue.config.productionTip = false
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import Vuex from "vuex";
  Vue.use(Vuex);
  var store=new Vuex.Store({
    state:{
      count:0
    },
    mutations:{
      increment(state){ 
        state.count++
      },
      subtract(state,obj){ 
        state.count--
      }
    },
    getters:{
      optCount:function(state){
        return state.count;
      }
    }
  });
  export default store;
  Vue.http.options.emulateJSON = true;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
