<template>
  <div class="todo">
    <input
      type="checkbox"
      class="todo__done"
      :checked="done"
      @click="$emit('toggle')"
    />
    <span class="todo__text">{{ text }}</span>
  </div>

</template>

<script>
  export default {
    name: 'todo',
    props: {
      text: '',
      done: false
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .todo {
    padding 16px;
    display block;
    box-shadow 0 1px 1px #ccc
  }
</style>
