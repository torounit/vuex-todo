<template>
  <div class="App">
    <input
      class="App__input"
      autofocus
      autocomplete="off"
      placeholder="What needs to be done?"
      v-model="value"
      @keyup.enter="addTodo(value)"
    >
    <div class="App__box">
      <Todo
        v-for="todo in filteredTodos"
        :text="todo.text"
        :done="todo.done"
        @toggle="toggleTodo(todo)"
        @delete="deleteTodo(todo)"
      />
    </div>

    <div class="App__box">
     <TodoFilter />
    </div>
  </div>
</template>

<script>
  import Todo from './components/Todo'
  import TodoFilter from './components/TodoFilter'
  import { mapActions } from 'vuex'

  const filters = {
    ALL: todos => todos,
    ACTIVE: todos => todos.filter(todo => !todo.done),
    COMPLETED: todos => todos.filter(todo => todo.done)
  }

  export default {
    name: 'App',
    components: {
      Todo,
      TodoFilter
    },
    data () {
      return {
        filters: filters
      }
    },
    computed: {
      todos () {
        return this.$store.state.todos
      },
      filteredTodos () {
        return filters[this.$store.state.filter](this.todos)
      }
    },
    methods: mapActions([
      'addTodo',
      'toggleTodo',
      'deleteTodo'
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
  .App {
    margin 20px;


  }

  .App__input {
    display block
    width 100%
    box-sizing border-box
    padding 16px
    border: none
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    margin: 16px 0
    background-color: #fff
  }

  .App__box {
    margin: 16px 0
    display block
    background-color: #fff
    width 100%
    box-sizing border-box
    border: none
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  }

</style>
