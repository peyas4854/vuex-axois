<template>
  <div>

    <h1 class="text-center">Todos {{ count }} </h1>

    <div  v-for="todo in coins" :key="todo.id">
        <div class="todo">
        {{ todo.title }}
        </div>
     

    </div>
  
    <!-- <p> {{ coins }}</p> -->
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';
export default {
   created () {
    this.$store.dispatch('loadCoins')
    //this.loadCoins;
  },
  computed:{
     ...mapState([
      'coins'
    ]),
  },
  methods:{
    ...mapActions([
      'loadCoins',
    ])


  }
  
}
</script>

<style  scoped>
.todo{
  padding:15px 15px;
  background-color :rgb(192, 180, 218);
  margin:10px 10px;
  
}
.text-center{
  text-align: center;
}

</style>


