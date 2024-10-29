<template>
  <div class="d-flex flex-wrap gap-1 p-0 text-nowrap">
    <div class="btn btn-success" @click="changeCounter(true)">+ Arttır</div>
    <div class="btn btn-danger" @click="changeCounter(false)">- Azalt</div>
    <div class="btn btn-success" @click="increaseCounter">Mutation Arttır</div>
    <div class="btn btn-danger" @click="decreaseCounter()">Mutation Azalt</div>
    <div class="btn btn-warning" @click="increament()">Action increament</div>
    <div class="btn btn-warning" @click="decreament()">Action decremant</div>
    <hr>
    <div class="btn btn-warning" @click="increamentAsync">Action Aysnc increament</div>

  </div>
</template>

<script>
  import { mapMutations,mapActions } from "vuex"
  
  export default {
    methods:{
      ...mapMutations([
        'increaseCounter',
        'decreaseCounter'
      ]),
      ...mapActions([
        "increament",
        "decreament",
        "increamentAsync"
      ]),
      // increament(){
      //   this.$store.dispatch("increament")
      // },
      // decreament(){
      //   this.$store.dispatch("decreament")
      // },
      // increamentAsync(){
      //   this.$store.dispatch("increamentAsync")
      //   console.log("increamentAsync")
      // },

      changeCounter(behaviour){
        if(behaviour){
          // this.$emit("counterEvent", 1)
          // this.$store.state.counter++
          this.$store.commit("updateCounter", 1)
          console.log("updateCounter")
        }else{
          // this.$emit("counterEvent", -1)
          // this.$store.state.counter--
          this.$store.commit("updateCounter", -1)
          console.log("updateCounter")
        }
      },
      //mapMutations ile kullanımı daha sağlıklıdır!
      // increaseCounter(){
      //   this.$store.commit("increaseCounter")
      // },
      // decreaseCounter(){
      //   this.$store.commit("decreaseCounter")
      // }
    }
  }
</script>

<style scoped>

</style>