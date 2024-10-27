<template>
  <div>
    <!-- <h1>{{ title }}</h1>
    <lamp-status v-for="i in 2"></lamp-status>
    <hr>
    <lampStatus></lampStatus>
    <hr>
    <SecondComp/> -->
    <!-- <ThirdPage/> -->
    <FourthPage></FourthPage>

  </div>
</template>

<script>
import FirstComp from './pages/FirstComp.vue';
import SecondComp from './pages/SecondComp.vue';
import ThirdPage from './pages/ThirdPage.vue';
import FourthPage from './pages/FourthPage.vue';

export default {
  data() {
    return {
      title: "Merhaba İlk Proje"
    }
  },
  components: {
    //"lamp-status": FirstComp,
    lampStatus: FirstComp,
    SecondComp,
    ThirdPage,
    FourthPage
  }
}
</script>

<style></style>
