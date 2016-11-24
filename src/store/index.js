import Vue from 'vue'
import Vuex from 'vuex'
import state from './state';
import mutations from './mutations';

import logger from 'vuex/dist/logger';
const plugins = [
  logger()
];
Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  plugins
})
