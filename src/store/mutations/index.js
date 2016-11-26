import {ADD_TODO} from '../mutation-types';
import {TOGGLE_TODO} from '../mutation-types/index';
export default {
  [ADD_TODO] (state, {text}) {
    state.todos.push({
      text,
      done: false
    })
  },
  [TOGGLE_TODO] (state, {todo}) {
    todo.done = !todo.done
  }
}
