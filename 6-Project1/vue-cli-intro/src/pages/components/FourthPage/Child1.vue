<template>
  <div>
    {{ content }}
    <div class="memory">
      <slot name="heading"></slot>
    </div>
    <div class="memory">
      <slot></slot>
    </div>
    <div class="memory">
      <slot name="author">
        <h3>Author</h3>
        <p>İçerik yok</p>
      </slot>
    </div>
    
  </div>
</template>

<script>
  export default {
    data(){
      return{
        
      }
    },
    props:{
      content:{
        type:String
      }
    }
  }
</script>

<style scoped>
  div.memory{
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px #666;
    padding: 10px 20px;
    margin: 20px 0;
    text-align: center;
  }
</style>