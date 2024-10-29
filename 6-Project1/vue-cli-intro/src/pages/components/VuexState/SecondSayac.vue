<template>
  <div class="bg-warning p-2 border-1 border-dark-subtle border mb-3">
    <strong>Sayaç : {{ double }}</strong>
    <br>
    <strong>Tıklama Sayısı : {{ string }}</strong>
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
      }
    }

  }
</script>

<style scoped>

</style>