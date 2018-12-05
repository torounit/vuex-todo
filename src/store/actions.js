import { ADD_TODO, DELETE_TODO, SELECT_FILTER, TOGGLE_TODO } from './mutation-types'

export const selectFilter = ({commit}, filter) => {
  commit(SELECT_FILTER, {
    filter
  })
}

export const addTodo = ({commit}, text) => {
  commit(ADD_TODO, {text})
}
export const toggleTodo = ({commit}, todo) => {
  commit(TOGGLE_TODO, {todo})
}
export const deleteTodo = ({commit}, todo) => {
  commit(DELETE_TODO, {todo})
}
