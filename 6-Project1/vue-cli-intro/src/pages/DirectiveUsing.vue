<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>VueJS ile gelen Directive Tanımları</h3>
        <p v-text="'v-text Deneme yanılma metodu her zaman iyidir..'"></p>
        <p v-html="'<strong>V-HTML</strong>'"></p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Custom Directive</h3>
        <p v-color:background.delay.flash="{mainColor: 'green', secondColor:'blue', delay:1000}">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magni nulla,
          sunt rerum, vero, soluta laborum maxime illum inventore dignissimos facilis suscipit architecto modi dolor
          ullam sint. Unde, voluptatum quam.</p>
        <hr>
        <p v-color:color="'red'">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magni nulla, sunt rerum,
          vero, soluta laborum maxime illum inventore dignissimos facilis suscipit architecto modi dolor ullam sint.
          Unde, voluptatum quam.</p>
        <hr>
        <p v-color:color.delay="'red'">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magni nulla, sunt rerum, vero,
          soluta laborum maxime illum inventore dignissimos facilis suscipit architecto modi dolor ullam sint. Unde,
          voluptatum quam.</p>

        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {

  },
  //local directives comp bazlı çalışır
  directives: {
    "color": {
      bind(el, binding, vnode) {
        let delay = 0
        if(binding.modifiers["delay"]){
          delay = binding.value.delay
        }

        if(binding.modifiers["flash"]){
          let firstColor = binding.value.mainColor
          let secondColor = binding.value.secondColor
          let currentColor = firstColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor ? currentColor = firstColor : currentColor = secondColor
              if (binding.arg == 'background') {
                el.style.backgroundColor = currentColor
              } else if (binding.arg == 'color') {
                el.style.color = currentColor
              } 
            }, delay);
          }, delay);
        }else{
          setTimeout(() => {
            if (binding.arg == 'background') {
              el.style.backgroundColor = binding.value
            } else if (binding.arg == 'color') {
              el.style.color = binding.value
            } else {
              el.style.color = 'orange'
            }
          }, delay);
        }
      }
    }
  }
}
</script>

<style scoped></style>