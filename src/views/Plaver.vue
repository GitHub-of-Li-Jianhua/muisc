<template>
  <transition
    :css="false"
    @enter="enter"
    @leave="leave">
<!--    <div class="player" v-show="this.$store.getters.isFullScreen">-->
<!--    <div class="player" v-show="this.isFullScreen" ref="onrmalPlayer">-->
    <div class="player" v-show="this.isFullScreen">
      <Plavertop></Plavertop>
      <Playercon></Playercon>
      <Playerbottom></Playerbottom>
      <div class="bg">
        <img src="../assets/images/sybj.jpg" alt="">
      </div>
    </div>
  </transition>
</template>

<script>
import Plavertop from '../components/player/Plavertop'
import Playercon from '../components/player/Playercon'
import Playerbottom from '../components/player/Playerbottom'
import { mapGetters } from 'vuex'
import Velocity from 'velocity-animate'
import 'velocity-animate/velocity.ui'
export default {
  name: 'Plaver',
  components: {
    Plavertop,
    Playercon,
    Playerbottom
  },
  computed: {
    ...mapGetters([
      'isFullScreen'
    ])
  },
  methods: {
    enter (el, done) {
      // Velocity(this.$refs.onrmalPlayer, 'transition.shrinkIn', { duration: 500 }, function () {
      Velocity(el, 'transition.shrinkIn', { duration: 500 }, function () {
        done()
      })
    },
    leave (el, done) {
      // Velocity(this.$refs.onrmalPlayer, 'transition.shrinkOut', { duration: 500 }, function () {
      Velocity(el, 'transition.shrinkOut', { duration: 500 }, function () {
        done()
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .player{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #74787c;
    z-index: 999;
    .bg{
      width: 100%;
      height: 100%;
      img{
        height: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        filter: blur(20px);
      }
    }
  }
</style>
