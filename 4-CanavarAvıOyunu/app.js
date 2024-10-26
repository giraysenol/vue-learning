const app = Vue.createApp({
  data() {
    return {
      healts:{
        Sen : 100,
        Canavar : 100
      },
      game_is_on:false,
      counter:{
        help:0,
        sattack:0
      },
      logs:[
      ]
    }
  },
  methods: {
    attackBTN(){
      const randomDamage1 = this.createRandomNumber()
      const randomDamage2 = this.createRandomNumber()
      let isFirt = this.createRandomNumber() > 5 ? true : false
      if(isFirt){
        this.healts.Sen - randomDamage1 < 0 ? this.healts.Sen = 0 :  this.healts.Sen -= randomDamage1;
        this.healts.Canavar - randomDamage2 < 0 ?   this.healts.Canavar = 0 : this.healts.Canavar -= randomDamage2;
        this.logs.push({turn:true,text:`Canavarın Canını Azalttın : (${randomDamage1})`},
                      {turn:false,text:`Canavar Saldırısı: (${randomDamage2})`})
      }else{
        this.healts.Canavar - randomDamage2 < 0 ?   this.healts.Canavar = 0 : this.healts.Canavar -= randomDamage2;
        this.healts.Sen - randomDamage1 < 0 ? this.healts.Sen = 0 :  this.healts.Sen -= randomDamage1;
        this.logs.push({turn:false,text:`Canavar Saldırısı: (${randomDamage2})`},
                      {turn:true,text:`Canavarın Canını Azalttın : (${randomDamage1})`})
      }
    },
    speacialAttackBTN(){
      const randomDamage1 = this.createRandomNumber() * 2
      const randomDamage2 = this.createRandomNumber() * 2
      let isFirt = this.createRandomNumber() > 5 ? true : false
      if(isFirt){
        this.healts.Sen - randomDamage1 < 0 ? this.healts.Sen = 0 :  this.healts.Sen -= randomDamage1;
        this.healts.Canavar - randomDamage2 < 0 ?   this.healts.Canavar = 0 : this.healts.Canavar -= randomDamage2;
        this.logs.push({turn:true,text:`Canavarın Canını Azalttın : (${randomDamage1})`},
          {turn:false,text:`Canavar Saldırısı: (${randomDamage2})`})
      }else{
        this.healts.Canavar - randomDamage2 < 0 ?   this.healts.Canavar = 0 : this.healts.Canavar -= randomDamage2;
        this.healts.Sen - randomDamage1 < 0 ? this.healts.Sen = 0 :  this.healts.Sen -= randomDamage1;
        this.logs.push({turn:false,text:`Canavar Saldırısı: (${randomDamage2})`},
          {turn:true,text:`Canavarın Canını Azalttın : (${randomDamage1})`})
      }
      this.counter.sattack += 1
    },
    helpBTN(){
      const randomDamage1 = this.createRandomNumber()
      const randomDamage2 = this.createRandomNumber()
      let isFirt = this.createRandomNumber() > 5 ? true : false
      if(isFirt){
        this.healts.Sen + randomDamage1 < 100 ?  this.healts.Sen += randomDamage1 : this.healts.Sen = 100 ;
        this.healts.Canavar + randomDamage2 < 100 ?  this.healts.Canavar += randomDamage2 : this.healts.Canavar = 100 ;
        this.logs.push({turn:true,text:`Canın Çoğaldı : (${randomDamage1})`},
          {turn:false,text:`Canavarın Canı Çoğaldı: (${randomDamage2})`})
      }else{
        this.healts.Canavar + randomDamage2 < 100 ?  this.healts.Canavar += randomDamage2 : this.healts.Canavar = 100 ;
        this.healts.Sen + randomDamage1 < 100 ?  this.healts.Sen += randomDamage1 : this.healts.Sen = 100 ;
        this.logs.push({turn:false,text:`Canavarın Canı Çoğaldı: (${randomDamage2})`},
          {turn:true,text:`Canın Çoğaldı : (${randomDamage1})`})
      }
      this.counter.help += 1
    },
    surrenderBTN(){
      this.game_is_on = false
      this.counter.help = 0;
      this.counter.sattack = 0;
      this.healts.Sen = 100 
      this.healts.Canavar = 100 ;
      this.logs = []
    },
    createRandomNumber(){
      const randomDamage = Math.floor(Math.random() * 10) + 1;
      return randomDamage
    }
  },
  computed: {
    
  },
  watch: {
    'healts.Sen'(newVal) {
      if (newVal <= 0) {
        this.game_is_on = false;
        alert('Kaybettiniz!');
        this.surrenderBTN()
      }
    },
    'healts.Canavar'(newVal) {
      if (newVal <= 0) {
        this.game_is_on = false;
        alert('Kazandınız!');
        this.surrenderBTN()
      }
    }
  },
}).mount("#app")