const app = Vue.createApp({
  data() {
    return {
      title:"Lifecycle"
    }
  },
  beforeCreate() {
     console.log("beforeCreate()")
  },
  created() {
    console.log("created()")
  },
  beforeMount() {
    console.log("beforeMount()")
  },
  mounted() {
    console.log("mounted()")
  },
  beforeUpdate() {
    console.log("beforeUpdate()")
  },
  updated() {
    console.log("updated()")
  },
  beforeUnmount() {
    console.log("beforeUnmount()")
  },
  unmounted() {
    console.log("unmounted()")
  },
})
app.mount('#app');


app.unmount("#app");