<template>
  <div>
    <!-- <h1>{{ title }}</h1>
    <lamp-status v-for="i in 2"></lamp-status>
    <hr>
    <lampStatus></lampStatus>
    <hr>
    <SecondComp/> -->
    <!-- <ThirdPage/> -->
    <!-- <FourthPage></FourthPage> -->
    <!-- <FivePage></FivePage> -->
    <!-- <FormElements></FormElements> -->
    <!-- <DirectiveUsing></DirectiveUsing> -->
    <!-- <FilterMixins></FilterMixins> -->
    <!-- <Transitions/> -->
    <VuexState/>

  </div>
</template>

<script>
import FirstComp from './pages/FirstComp.vue';
import SecondComp from './pages/SecondComp.vue';
import ThirdPage from './pages/ThirdPage.vue';
import FourthPage from './pages/FourthPage.vue';
import FivePage from './pages/FivePage.vue';
import FormElements from './pages/FormElements.vue';
import DirectiveUsing from './pages/DirectiveUsing.vue';
import FilterMixins from './pages/FilterMixins.vue';
import Transitions from './pages/Transitions.vue';
import VuexState from './pages/VuexState.vue';

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
    FourthPage,
    FivePage,
    FormElements,
    DirectiveUsing,
    FilterMixins,
    Transitions,
    VuexState
  }
}
</script>

<style></style>
