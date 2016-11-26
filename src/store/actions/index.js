import {ADD_TODO, TOGGLE_TODO, DELETE_TODO} from '../mutation-types';

export const addTodo = ({ commit }, text) => {
  if (text) {
    commit(ADD_TODO, {
      text
    })
  }
}

export const toggleTodo = ({ commit }, todo) => {
  commit(TOGGLE_TODO, {
    todo
  })
}

export const deleteTodo = ({ commit }, todo) => {
  commit(DELETE_TODO, {
    todo
  })
}
