<template>
  <div>
    <p>Lamba durumu : {{ status }}</p>
    <button @click="openLamb">Aç</button>
    <hr>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        status: "Kapalı"
      }
    },
    methods: {
      openLamb(){
        this.status = "Açık"
      }
    },
  }
</script>

<style scoped>

</style>