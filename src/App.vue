<template>
  <div>
    <img src="./assets/logo.png">
    <hello></hello>
  </div>
</template>

<script>
  import Hello from './components/Hello'

  export default {
    name: 'app',
    components: {
      Hello
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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
