<template>
  <div class="bg-warning p-2 border-1 border-dark-subtle border mb-3">
    <strong>Sayaç : {{ double }}</strong>
    <br>
    <strong>Tıklama Sayısı : {{ string }}</strong>
    <br>
    <!-- bunun yerine v-model ve computed get set ile daha pratik şekilde işlem yapılmalı -->
    <!-- <input type="text" :value="getValue" @input="setValue"> -->
    <input type="text" v-model="getValue">
    <p>{{ getValue }}</p>
  </div>
</template>

<script>
  import {mapGetters} from "vuex"

  export default {
    // props:{
    //   counter:{
    //     type:Number,
    //     required:true
    //   }
    // },
    // computed:{
    //   counter(){
    //     // return this.$store.state.counter * 2
    //     return this.$store.getters.getDoubleCounter
    //   },
    //   stringCounter(){
    //     return this.$store.getters.stringCounter
    //   }
    // },
    // computed: mapGetters([
    //   'getDoubleCounter',
    //   'stringCounter'
    // ])
    computed:{
      ...mapGetters({
      double:'getDoubleCounter',
      string:'stringCounter'
      }),
      deneme(){
        return "deneme"
      },
      getValue:{
        get(){
          return this.$store.getters.getValue
        },
        set(value){
          this.$store.dispatch('setValueData',value)
        }
        
      }
    },
    methods:{
      setValue($e){
        this.$store.dispatch('setValueData',$e.target.value)
      }
    }

  }
</script>

<style scoped>

</style>