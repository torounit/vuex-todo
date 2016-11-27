<template>
  <div class="Todo">
    <input
      type="checkbox"
      class="Todo__done"
      :checked="done"
      @click="$emit('toggle')"
    />
    <div class="Todo__text">{{ text }}</div>
    <div class="Todo__delete">
      <CloseButton  @click="$emit('delete')" />
    </div>
  </div>

</template>

<script>
  import CloseButton from './CloseButton'
  export default {
    name: 'Todo',
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
  .Todo {
    padding 16px;
    width 100%;
    box-sizing border-box;
    box-shadow 0 1px 1px #ccc
    display flex
  }

  .Todo__text {
    padding 0 4px
    flex: 1 0 auto;
  }
</style>
