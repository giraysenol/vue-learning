<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-offset-3">
        <h3>Filter Ve Mixins</h3>
        <!-- message yi | ile toUpperCase filterine gönderir -->
        <p>{{message | toUppercase | toLowercase}}</p>
        <hr>
        <!-- mixinler kullanıldığı yere bir kopyasını gönderir ve öyle çalışır
         diğer complarda kullanılan mixinleri etkilemez aşağıdaki buton mixindeki arraya data ekler
         ama sadece bu kompenent bazında ekler -->
        <button class="btn btn-primary" @click="products.push('kamyon')">Ürün Ekle</button>
        <input type="text" v-model="searchText">
        <ul>
          <!-- eğer arama gibi bir uygulama yapacaksak computed'ler daha performanslıdır! -->
          <li v-for="product in filtered">{{ product }}</li>
        </ul>

        <FilterList></FilterList>
      </div>
    </div>
  </div>
</template>

<script>
  import FilterList from './components/FilterMixins/FilterList.vue';
  import { productMixin } from '../mixins/productListMixin';

  export default {
    components:{
      FilterList
    },
    data(){
      return{
        message:"Giray ve Büşra",
      }
    },
    filters:{
      toUppercase(value){
        return value.toUpperCase()
      }
    },
    mixins:[productMixin],
    created(){
      console.log("filtermixins created")
    }
  }
</script>

<style scoped>

</style>