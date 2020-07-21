<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view></router-view>
    <Plaver></Plaver>
    <Mini></Mini>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Plaver from './views/Plaver'
import Mini from './views/Mini'
export default {
  name: 'App',
  components: {
    Navigation,
    Plaver,
    Mini
  }
}
</script>

<style lang="scss">

</style>
