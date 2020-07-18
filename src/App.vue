<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view></router-view>
    <Player></Player>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Player from './components/Player'
export default {
  name: 'App',
  components: {
    Navigation,
    Player
  }
}
</script>

<style lang="scss">

</style>
