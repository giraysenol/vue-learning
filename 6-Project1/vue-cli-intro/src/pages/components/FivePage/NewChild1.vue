<template>
  <div>
    NewChild1 - comp
    <div>
      <button type="button" @click="counter++">Arttır</button>
    </div>
    <div>
      {{ counter }}
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        counter:0
      }
    },
    //keep-alive destroyed'i ve beforeDestroy'u kaldırır
    destroyed() {
      console.log("destroyed")
    },
    // ama bu 2 hook'u kazandırır
    activated(){
      console.log("activated")
    },
    deactivated(){
      console.log("deactivated")
    }
  }
</script>

<style scoped>

</style>