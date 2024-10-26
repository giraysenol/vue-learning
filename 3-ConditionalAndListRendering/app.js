const app = Vue.createApp({
  data(){
    return{
      isShow:true,
      sayi:10,
      showParagh:false
    }
  }
}).mount("#app")

const app2 = Vue.createApp({
  data(){
    return{
      products:["Monitör", "Klavye", "Askı", "Masa"],
      persons:[
        {name:"Giray", email:"giray@mail.com"},
        {name:"Büşra", email:"büşra@mail.com"},
        {name:"Tanem", email:"tanem@mail.com"},
        {name:"Gelgörbeni", email:"gelgörbeni@mail.com"}
      ]
    }
  }
}).mount("#app2")
