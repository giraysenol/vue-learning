<template>
  <div class="bg-warning p-2 border-1 border-dark-subtle border mb-3">
    <strong>Sayaç : {{ counter }}</strong>
  </div>
</template>

<script>
  export default {
    // props:{
    //   counter:{
    //     type:Number,
    //     required:true
    //   }
    // },
    computed:{
      counter(){
        // return this.$store.state.counter * 2
        return this.$store.getters.getDoubleCounter
      }
    }
  }
</script>

<style scoped>

</style>