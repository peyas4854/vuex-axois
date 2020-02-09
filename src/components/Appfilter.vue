<template>
  <div class="filter">
      Filter 
      <select @change="filtertodo($event)">

      <option value>Please select a value </option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="5">5</option>
     <option value="6">6</option>
     <option value="7">7</option>
    
      </select>
  </div>
</template>

<script>
import {  mapActions } from "vuex";
export default{
  methods:{
  ...mapActions([
    'filter'
  ]),
  filtertodo(e){
        //console.log("event",e);
        //get the option value
       
       // console.log("limit",e.target.value);
        this.filter(e.target.value);

      }
}
}

</script>

<style scoped>
.filter[data-v-59154c59] {
    padding: 14px 10px;
    background-color: #e9e9ff;
    margin: 10px 10px;
    text-align: center;
}
select {
    width: 25%;
    padding: 5px 7px;
    border: 1px solod red;
}
</style>