<template>
  <div class="d-flex gap-1 p-0">
    <div class="btn btn-success" @click="changeCounter(true)">+ Arttır</div>
    <div class="btn btn-danger" @click="changeCounter(false)">- Azalt</div>
    <div class="btn btn-success" @click="increaseCounter">Arttır</div>
    <div class="btn btn-danger" @click="decreaseCounter">Azalt</div>
  </div>
</template>

<script>
  import { mapMutations } from "vuex"
  
  export default {
    methods:{
      ...mapMutations([
        'increaseCounter',
        'decreaseCounter'
      ]),
      changeCounter(behaviour){
        if(behaviour){
          // this.$emit("counterEvent", 1)
          // this.$store.state.counter++
          this.$store.commit("updateCounter", 1)
        }else{
          // this.$emit("counterEvent", -1)
          // this.$store.state.counter--
          this.$store.commit("updateCounter", -1)
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