import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = true

Vue.component('componentA',{
  template: `<span>Hello world - dit is een globale component A</span>`
    }
)

new Vue({
  render: h => h(App),
}).$mount('#app')

