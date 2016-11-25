import {ADD_TODO} from '../mutation-types';
export default {
  [ADD_TODO] (state, { text }) {
    state.todos.push({
      text,
      done: false
    })
  }
}
