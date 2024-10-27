<template>
  <div class="container">
    <div class="col-md-6 col-md-offset-3">
        <Child1>
          <h1 slot="heading">güzel bir anı</h1>
          <p>Bu çok güzel bir anıydı</p>

          <!-- Bunu Gönderince Child içerisinde slot child elementleri bunu basar göndermezsem child elementleri basar
          <p slot="author">Giray</p> -->
        </Child1>
     </div>
  </div>
</template>

<script>
  import Child1 from './components/FourthPage/Child1.vue';

  export default {
    data(){
      return{
        
      }
    },
    components:{
      Child1
    }
  }
</script>

<style scoped>

</style>