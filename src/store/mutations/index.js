import {ADD_TODO, TOGGLE_TODO, DELETE_TODO} from '../mutation-types';
export default {
  [ADD_TODO] (state, {text}) {
    state.todos.push({
      text,
      done: false
    })
  },
  [TOGGLE_TODO] (state, {todo}) {
    todo.done = !todo.done
  },
  [DELETE_TODO] (state, {todo}) {
    state.todos.splice(state.todos.indexOf(todo), 1)
  }

}
