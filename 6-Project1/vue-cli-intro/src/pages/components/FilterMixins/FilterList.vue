<template>
  <div>
    <hr>
    <input type="text" v-model="searchText">
    <ul>
      <li v-for="product in filtered">{{ product }}</li>
    </ul>
  </div>
</template>

<script>
  import { productMixin } from '../../../mixins/productListMixin';
  export default {
    mixins:[productMixin],
    created(){
      console.log("filter list created")
    }
  }
</script>

<style scoped></style>