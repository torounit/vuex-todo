<template>
  <select
    class="TodoFilter"
    v-model="value"
    @change="selectFilter(value)"
  >
    <option v-for="(filter,index) in filters" :key="index">{{ filter }}</option>
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


<style scoped>
  .TodoFilter {
    display: block;
    width: 100%;
    box-sizing: border-box;
    border: none;
    height: 2.5em;
  }
</style>

