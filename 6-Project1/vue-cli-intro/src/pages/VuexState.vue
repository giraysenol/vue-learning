<template>
  <div class="container">
    <div class="row">
      <h3 class="text-center my-3">VUEX</h3>
      <hr class="text-secondary">
      <Sayac :counter="counter"/>
      <hr class="text-secondary">
      <SecondSayac :counter="counter"/>
      <hr class="text-secondary">
      <Buttons @counterEvent="counter+=$event"/>
    </div>
  </div>
</template>

<script>
  import Buttons from './components/VuexState/Buttons.vue';
  import Sayac from './components/VuexState/Sayac.vue';
  import SecondSayac from './components/VuexState/SecondSayac.vue';
  
  export default {
     components:{
      Sayac,
      Buttons,
      SecondSayac
     },
     data(){
      return{
        counter:1
      }
     }
  }
</script>

<style scoped>

</style>