import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods:{
    changeAge(age){
      this.$emit("ageWasEdited", age)
    }
  }
});
//global directive
// Vue.directive("color",{
//   bind(el,binding,vnode){
//     if(binding.modifiers["delay"]){
//      setTimeout(() => {
//       if(binding.arg == 'background'){
//         el.style.backgroundColor = binding.value
//       }else if(binding.arg == 'color'){
//         el.style.color = binding.value
//       }else{
//         el.style.color = 'orange'
//       }
//      }, 1000);
//     }
//   }
// })

new Vue({
  el: '#app',
  render: h => h(App)
})
