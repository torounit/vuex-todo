import logger from 'vuex/dist/logger'
import createPersist from 'vuex-localstorage'
const plugins = [
  logger({}),
  createPersist({
    namespace: 'vuex-todo',
    initialState: {},
    // ONE_WEEK
    expires: 7 * 24 * 60 * 60 * 1e3
  })
]

export default plugins
