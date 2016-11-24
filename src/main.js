import Vue from 'vue'
import App from './App'
import store from './store'

export default new Vue({
  store,
  el: '#app',
  template: '<App/>',
  components: { App }
});
