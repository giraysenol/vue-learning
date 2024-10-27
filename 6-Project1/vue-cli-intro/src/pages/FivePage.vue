<template>
  <div class="container">
    <button @click="selectedComponent = 'Child1'" class="btn-sm btn btn-primary">Child1</button>
    <button @click="selectedComponent = 'NewChild1'" class="btn-sm btn btn-primary">NewChild1</button>
    <button @click="selectedComponent = 'Child2'" class="btn-sm btn btn-primary">Child2</button>
    <hr>
    <p>{{ selectedComponent }}</p>
    <hr>
    <keep-alive>
      <component :is="selectedComponent">
        <p>sas</p>
      </component>
    </keep-alive>

</div>
</template>

<script>
  import Child1 from './components/FivePage/Child1.vue';
  import Child2 from './components/FivePage/Child2.vue';
  import NewChild1 from './components/FivePage/NewChild1.vue';

  export default{
    data(){
      return{
        selectedComponent : "Child1"
      }
    },
    components:{
      Child1,
      Child2,
      NewChild1
    }
  }

</script>