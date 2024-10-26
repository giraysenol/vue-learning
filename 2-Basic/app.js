const app = Vue.createApp({
  data(){
    return{
      isYellow:true,
      color: "green"
    }
  },
  computed:{
    changeCol(){
      return{
        yellow: this.isYellow,
        blue: !this.isYellow
      }
    }
  }
}).mount("#app1")

const app2 = Vue.createApp({
  data(){
    return{
      color:"green",
      height: 100,
    }
  },
  methods: {
    
  },
  computed: {
    customStyle(){
      return{
        backgroundColor : this.color
      }
    }
  },
  watch: {
    
  },
}).mount("#app2")