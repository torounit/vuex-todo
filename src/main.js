import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'

Vue.use(Vuex);

export default new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});
