import {ADD_TODO} from '../mutation-types';

export const addTodo = ({ commit }, text) => {
  if (text) {
    commit(ADD_TODO, {
      text
    })
  }
}
