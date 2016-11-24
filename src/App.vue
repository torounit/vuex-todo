<template>
  <div>
    <div class="">

      <input class="new-todo"
             autofocus
             autocomplete="off"
             placeholder="What needs to be done?"
             @keyup.enter="addTodo">
    </div>
    <div>
      <Todo v-for="todo in todos" :text="todo.text" />
    </div>
  </div>
</template>

<script>
  import Todo from './components/Todo'
//  import { mapMutations } from 'vuex'

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
    methods: {
      addTodo (e) {
        var text = e.target.value
        console.log(this.$store)
        if (text.trim()) {
          this.$store.commit('addTodo', { text })
        }
        e.target.value = ''
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '~normalize.css/normalize.css';

  :root {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }

</style>

<style scoped lang="stylus" rel="stylesheet/stylus">

  :local {
  }
</style>
