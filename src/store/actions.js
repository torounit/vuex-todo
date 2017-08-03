import {SELECT_FILTER} from './mutation-types'

export const selectFilter = ({commit}, filter) => {
  commit(SELECT_FILTER, {
    filter
  })
}
