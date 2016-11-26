<template>
  <div class="todo">
    <input
      type="checkbox"
      class="todo__done"
      :checked="done"
      @click="$emit('toggle')"
    />
    <div class="todo__text">{{ text }}</div>
    <div class="todo__delete">
      <CloseButton  @click="$emit('delete')" />
    </div>
  </div>

</template>

<script>
  import CloseButton from './CloseButton'
  export default {
    name: 'todo',
    props: {
      text: '',
      done: false
    },
    components: {
      CloseButton
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .todo {
    padding 16px;
    width 100%;
    box-sizing border-box;
    box-shadow 0 1px 1px #ccc
    display flex
  }

  .todo__text {
    padding 0 4px
    flex: 1 0 auto;
  }
</style>
