<template>
  <div>
    <h4>{{ title }}</h4>
    <small>Child1</small>
    <small>{{ child2Data }}</small>

    <small>{{ age }}</small>
    <button @click="changeAge()">Yaşı Değiştir</button>
  </div>
</template>

<script>
  import { eventBus } from '../../../main';

  export default {
    data(){
      return{
        title:"Child comp 1",
        age:28
      }
    },
    props:{
      child2Data:{
        type: String,
        default: 'Data Yok'
      }
    },
    methods:{
      changeAge(){
        this.age = 30
        eventBus.changeAge(this.age)
      }
    }
  }
</script>

<style scoped>
  div{
    background-color: rgb(245, 220, 220);
    padding: 20px;
    width: 100%;
  }
</style>