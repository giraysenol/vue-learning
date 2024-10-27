<template>
  <div>
    <h4>{{ title }}</h4>
    <small>Child2</small>
    <small>{{ name }}</small>
    <small> {{ swichName() }}</small>
    <button  @click="sentToParent()">Veriyi Gönder</button>
    {{ age }}
  </div>
</template>

<script>
  import { eventBus } from '../../../main';

  export default {
    data(){
      return{
        title:"Child comp 2",
      }
    },
    props:{
      //name:[String, Array]
      name:{
        type: String,
        required: true,
        default: "default veri"
      },
      age:Number
    },
    methods:{
      swichName(){
        return this.name.split("").reverse().join("")
      },
      sentToParent(){
        this.$emit("data",this.title);
      }
    },
    created(){
      eventBus.$on("ageWasEdited", (age) => {
        this.age = age
      })
    }
  }
</script>

<style scoped>
  div{
    background-color: rgb(242, 245, 220);
    padding: 20px;
    width: 100%;
  }
</style>