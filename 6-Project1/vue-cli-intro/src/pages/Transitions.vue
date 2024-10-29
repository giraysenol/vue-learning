<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Animation ve Transition</h3>
        <hr>
        <button class="btn btn-primary" @click="show = !show">Kutuyu Göster/Gizle</button>
        <transition name="fade">
          <div v-if="show" class="alert alert-success mt-2" role="alert">
            <strong class="text-success">Bu bir alert</strong>
          </div>
        </transition>
        <hr>
        <transition name="slide" type="animation" appear>
          <div v-if="!show" class="alert alert-warning mt-2" role="alert">
            <strong class="text-warning">Bu bir alert</strong>
          </div>
        </transition>

        <transition 
          enter-class=""
          enter-active-class=""
          leave-class=""
          leave-active-class=""
          appear>
          <div v-if="!show" class="alert alert-warning mt-2" role="alert">
            <strong class="text-warning">Bu bir alert</strong>
          </div>
        </transition>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>

<style scoped>
  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition: opacity 1s;
  }
  .fade-leave{
    /* opacity: 1; */
  }
  .fade-leave-active{
    transition: opacity 1s;
    opacity: 0;
  }
  .slide-enter{
    opacity: 0;
  }
  .slide-enter-active{
    animation: slide-in 1s ease-out forwards;
    transition: opacity 1s;
  }
  .slide-leave{

  }
  .slide-leave-active{
    animation: slide-out 1s ease-out forwards;
    transition: opacity 3s;
    opacity: 0;
  }

  @keyframes slide-in {
    from{
      transform: translateY(20px);
    }to{
      transform: translateY(0px);
    }
  }
  @keyframes slide-out {
    from{
      transform: translateY(0px);
    }to{
      transform: translateY(20px);
    }
  }
</style>