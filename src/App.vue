<template>
  <div id="app">
    <Navigation></Navigation>
<!--    <Mydetails></Mydetails>-->
    <router-view></router-view>
    <Player></Player>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
// import Mydetails from './views/Mydetails'
import Player from './components/Player'
export default {
  name: 'App',
  components: {
    Navigation,
    Player
    // Mydetails
  }
}
</script>

<style lang="scss">

</style>
