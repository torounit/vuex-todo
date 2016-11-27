<template>
  <select
    class="TodoFilter"
    v-model="value"
    @change="selectFilter(value)"
  >
    <option v-for="filter in filters">{{ filter }}</option>
  </select>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'TodoFilter',
    data () {
      return {
        filters: [
          'ALL',
          'ACTIVE',
          'COMPLETED'
        ],
        value: this.$store.state.filter
      }
    },
    methods: mapActions([
      'selectFilter'
    ])
  }
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
.TodoFilter {
  display block
  width 100%
  box-sizing border-box
  border none
  height 2.5em
}
</style>

