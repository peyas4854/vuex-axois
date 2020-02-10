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
     user:[
       {
        userId: 1,
        id: 1,
        title: "one"
       },
       {
        userId: 2,
        id: 2,
        title: "secend"
       }
      ],
  },
  actions: {
//load all todo
     async loadCoins ({ commit }) {
        axios
          .get('https://jsonplaceholder.typicode.com/todos')
          .then(r => r.data)
          .then(coins => {
          
          commit('SET_COINS', coins)
          })
        // const coins = await axios.get('https://jsonplaceholder.typicode.com/todos');
        // //console.log(coins);
        // commit('SET_COINS', coins)
        
      },
      //  deletetodoAction(context,index){
      //   console.log("deletetodoAction");
      //   console.log("index",index);
      //   context.commit("deletetodomutation", index);

      // }

      async deletetodoAction ( { commit },index){
         axios
         .delete(`https://jsonplaceholder.typicode.com/todos/${index+1}`)
        //await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('removeTodo', index)
        //console.log("async action",index);
      },
      async addtodo({ commit },newtodo){
        const coins = await axios.post('https://jsonplaceholder.typicode.com/users',{name:newtodo });
        console.log("paici",coins.data);
        //console.log("action",newtodo)
        commit('ADD_TODO',newtodo);
      },
      async  filter({commit},value){
        console.log("action event",value);
        // //get the option value
        axios
          .get(`https://jsonplaceholder.typicode.com/todos?_limit=${value}`)
          .then(r => r.data)
          .then(coins => {
          
          commit('SET_COINS', coins)
          })
      },
      async updateTodo({commit},updatetodo){
        //console.log("new",updatetodo);
        const coins = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updatetodo.id}`,updatetodo);
        commit('UPDATE_TODO', coins.data)

        

      }
    
  },
  mutations: {
    SET_COINS (state, coins) {
        state.coins = coins
      },
      deletetodomutation(state,index){
        state.user.splice(index,1);
      
      },
      removeTodo(state,index){
        console.log("removetodo",index);
        //state.coins.filter(coins => coins.index !== index)
        //state.coins.splice(index,1);//delete index item array 
        state.coins = state.coins.slice(0, index).concat(state.coins.slice(index+1, state.coins.length)) // delete index item array 
      
      //removeTodo:(state,index)=>state.coins = state.coins.filter(coins=>coins != index)
      },
      ADD_TODO(state,newtodo){
       
       const val = 
         {
           "name":newtodo,
           "title":newtodo,
         }
       
        state.coins.unshift(val);

      },
      UPDATE_TODO(state,updatetodo){
        console.log("id",updatetodo.id);
       
        const index = state.coins.findIndex(coins => coins.id === updatetodo.id)
        console.log("index",index);
        state.coins.splice(index,1,updatetodo);

      }
    
  }
})