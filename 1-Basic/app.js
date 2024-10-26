const app = Vue.createApp({
  data(){
    return{
      todoText:null,
      todoList:[],
      link: "https://www.google.com",
      title1: "İlk Oluşturulmuş Title",
      vueHtml: "<a href='https://www.google.com'>google</a>",
      counter: 0,
      x:0,
      y:0,
      text:null,
      counter2:0,
      counter3:0
    }
  },
  methods: {
    addTodo(){
      this.todoList.push(this.todoText)
    },
    func1(){
      this.title1 = "İkinci Oluşturulmuş Title"
      return this.title1
    },
    func2:function(name){
      alert(name)
    },
    increasecounter(number){
      this.counter+=number
    },
    updateCoords(number, event){
      this.counter += number
      this.x = event.clientX;
      this.y = event.clientY;
    },
    func3(){
      console.log("func3 çalışır")
      return this.counter2 > 10 ? "10 dan büyük" : "10 dan küçük"
    }
  },
  computed:{
    output(){
      console.log("output çalışır")
      return this.counter2 > 10 ? "10 dan büyük" : "10 dan küçük"
    }
  },
  watch:{
    counter2(val){
      setTimeout(() => {
        console.log(val)
        this.counter2 = 0
      }, 1500);
    }
  }
}).mount("#app")