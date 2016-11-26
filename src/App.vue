<template>
  <div class="app">
    <input
      class="app__input"
      autofocus
      autocomplete="off"
      placeholder="What needs to be done?"
      v-model="value"
      @keyup.enter="addTodo(value)"
    >
    <div class="app__todo">
      <Todo
        v-for="todo in todos"
        :text="todo.text"
        :done="todo.done"
        @toggle="toggleTodo(todo)"
      />
    </div>
  </div>
</template>

<script>
  import Todo from './components/Todo'
  import { mapActions } from 'vuex'

  export default {
    name: 'app',
    components: {
      Todo
    },
    computed: {
      todos () {
        return this.$store.state.todos
      }
    },
    methods: mapActions([
      'addTodo',
      'toggleTodo'
    ])
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '~normalize.css/normalize.css';

  :root {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    background-color: #EEE;
  }

</style>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .app {
    margin 20px;


  }

  .app__input {
    display block
    width 100%
    box-sizing border-box
    padding 16px
    border: none
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    margin-bottom: 16px
    background-color: #fff
  }

  .app__todo {
    display block
    background-color: #fff
    width 100%
    box-sizing border-box
    border: none
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

  }
</style>
