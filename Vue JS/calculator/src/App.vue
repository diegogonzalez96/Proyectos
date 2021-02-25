<template>
  <div id="app">
    <header>¡Calculadora con Vue! :)</header>
    <Calculator/>
  </div>
</template>

<script>
import Calculator from './components/Calculator.vue'

export default {
  name: 'App',
  components: {
    Calculator
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=DotGothic16&display=swap');
 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header{
  font-size: 60px;
  font-family:'DotGothic16', sans-serif;
  text-align: center;
  color: orange;
  margin-bottom: 50px;
}

</style>


