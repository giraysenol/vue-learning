<template>
  <div class="container">
    <h2>{{ title }}</h2>
    <p>Burası parent comp</p>

    <p>{{ isim }}</p>
    <button @click="changeName">Değiştir</button>

    <p>Child2 üzerinden gelen veri {{ childData }}</p>
    <hr>
    <div class="child-container">
      <Child1 :child2Data="childData"></Child1>
      <Child2 :name="isim" @data="childData= $event"></Child2>
    </div>
  </div>
</template>

<script>
  import Child1 from './components/ThirdPage/Child1.vue';
  import Child2 from './components/ThirdPage/Child2.vue';
 
  export default{
    data(){
      return{
        title:"3.Sayfa Parent Comp",
        isim: "Büşray",
        childData:""
      }
    },
    components:{
      Child1,
      Child2
    },
    methods:{
      changeName(){
        this.isim = "Giray"
      }
    }
  }
</script>

<style lang="css" scoped>
  div.container{
    border: 1px solid rgb(156, 156, 156);
    padding: 20px;
    background-color: rgb(220, 230, 245);
  }
  .child-container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 20px;
  }
</style>