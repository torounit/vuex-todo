<template>
  <div class="App">
    <input
      class="App__input"
      autofocus
      autocomplete="off"
      placeholder="What needs to be done?"
      @keyup.enter="addTodo"
    >
    <div class="App__box">
      <Todo
        v-for="(todo, index) in filteredTodos"
        :key="index"
        :text="todo.text"
        :done="todo.done"
        @toggle="toggleTodo(todo)"
        @delete="deleteTodo(todo)"
      ></Todo>
    </div>

    <div class="App__box">
      <TodoFilter></TodoFilter>
    </div>
  </div>
</template>

<script>
  import Todo from './components/Todo'
  import TodoFilter from './components/TodoFilter'
  import { mapActions } from 'vuex'
  import { ADD_TODO } from './store/mutation-types'

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
    methods: {
      ...mapActions([
        'toggleTodo',
        'deleteTodo'
      ]),
      addTodo (e) {
        this.$store.commit(ADD_TODO, {text: e.target.value})
      }
    }
  }
</script>
<style>
  @import '~normalize.css/normalize.css';

  :root {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    background-color: #EEE;
  }

</style>

<style scoped>
  .App {
    margin: 20px;

  }

  .App__input {
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 16px;
    border: none;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    margin: 16px 0;
    background-color: #fff;
  }

  .App__box {
    margin: 16px 0;
    display: block;
    background-color: #fff;
    width: 100%;
    box-sizing: border-box;
    border: none;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  }

</style>
