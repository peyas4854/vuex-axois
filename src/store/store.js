import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)


 export const store = new Vuex.Store({
//export default new Vuex.Store({
  state: {
     coins: [],
     count:2,
  },
  actions: {
//load all todo
     loadCoins ({ commit }) {
        axios
          .get('https://jsonplaceholder.typicode.com/todos')
          .then(r => r.data)
          .then(coins => {
          
          commit('SET_COINS', coins)
          })
        // const coins = await axios.get('https://jsonplaceholder.typicode.com/todos');
        // //console.log(coins);
        // commit('SET_COINS', coins)
        
      }
    
  },
  mutations: {
    SET_COINS (state, coins) {
        state.coins = coins
      }
    
  }
})