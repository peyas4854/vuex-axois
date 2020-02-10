<template>
  <div >
    <h1 class="text-center"> Todo  </h1>

    <div class="from-box">
      <input type="text" placeholder="Enter title" v-model="newTodo">
    <button class="add" @click="submit">ADD Todo </button>
    </div>

    <Appfilter/>


     <div  v-for="(todo,index) in coins" @dblclick="dbClick(todo)"
     
     :key="todo.in">
        <div class="todo"
        :class="{'is-completed':todo.completed}"
        >
        {{ todo.title }}
            <button class="delete" @click.prevent="deletetodoAction(index)"> Delete </button>
        </div>
    </div>
  </div>
</template>

<script>
import Appfilter from './Appfilter.vue';
import {mapState,mapActions,mapMutations} from 'vuex';
export default {
  components:{
    Appfilter
  },
  data(){
    return{
      newTodo:'',
     
    }
  },
   created () {
    // this.$store.dispatch('loadCoins')
    this.loadCoins();
  },
  computed:{
     ...mapState([
      'coins',
      'user',
    ]),
   
  },
  methods:{
    ...mapActions([
      'loadCoins',
      'deletetodoAction',
      'addtodo',
      'updateTodo'
    ]),
     ...mapMutations([
      'ADD_TODO'
    ]),
    
    remove(index){
    
      this.deletetodoAction(index);

    },
    submit(){
      this.addtodo(this.newTodo);
      this.newTodo ='';
    },
    dbClick(todo){
      console.log("old",todo);
      
      const updatedata={
        id:todo.id,
        title:todo.title,
        completed:!todo.completed
      }
      this.updateTodo (updatedata)
    }


  }
}
</script>

<style  scoped>


.todo{
  padding:15px 15px;
  background-color :rgb(192, 180, 218);
  margin:10px 10px;
  position: relative;
  
}
.text-center{
  text-align: center;
}
.delete{
    position: absolute;
    right: 1em;
    
}
.add{
  text-align: center;
  padding: 10px 10px;
  background-color: green;
  color:white;
  margin: 10px;
 
}
.from-box{
  padding: 10px 10px;

}
input {
    background-color: rgb(224, 228, 235);
    width: 80%;
    height: 30px;
    -webkit-box-shadow: rgb(24, 16, 16) 2px 3px 6px 2px;
    box-shadow: rgb(24, 16, 16) 2px 3px 6px 2px;
    font-family: cursive;
    font-size: 17px;
}
.is-completed{
  background-color: #0dbf8a;
  color: white;
}

</style>


