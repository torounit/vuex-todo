import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, FETCH_TODO, SELECT_FILTER } from './mutation-types'

export default {
  [FETCH_TODO] (state, {todos}) {
    state.todos = todos
  },
  [ADD_TODO] (state, {text}) {
    if (state.todos.map(todo => todo.text).indexOf(text) === -1) {
      state.todos.push({
        text,
        done: false
      })
    }
  },
  [TOGGLE_TODO] (state, {todo}) {
    todo.done = !todo.done
  },
  [DELETE_TODO] (state, {todo}) {
    state.todos.splice(state.todos.indexOf(todo), 1)
  },
  [SELECT_FILTER] (state, {filter}) {
    state.filter = filter
  }
}
