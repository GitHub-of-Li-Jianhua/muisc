<template>
  <div class="Mini-con">
    <div class="player-fl" @click="show">
      <img :src="currentSong.picUrl" alt="" ref="cd">
      <div class="h">
        <p>{{currentSong.name}}</p>
        <p>{{currentSong.singer}}</p>
      </div>
    </div>
    <div class="player-rj">
      <div class="play"></div>
      <div class="lb" @click="play" ref="play"></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'mi',
  methods: {
    ...mapActions([
      'setFullScreen',
      'isShowMiniPlayer',
      'setIsPlaying'
    ]),
    show () {
      this.setFullScreen(true)
      this.isShowMiniPlayer(false)
    },
    play () {
      this.setIsPlaying(!this.isPlaying)
    }
  },
  computed: {
    ...mapGetters([
      'isPlaying',
      'currentSong'
    ])
  },
  watch: {
    isPlaying (newValue, oldValue) {
      if (newValue) {
        this.$refs.play.classList.add('active')
        this.$refs.cd.classList.add('active')
      } else {
        this.$refs.play.classList.remove('active')
        this.$refs.cd.classList.remove('active')
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .Mini-con{
    width: 96%;
    height: 100%;
    background: white;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .player-fl{
      width: 60%;
      height: 100%;
      img{
        width: 80px;
        border-radius: 50%;
        display: block;
        float: left;
        margin-top: 5px;
        animation: sport 5s linear infinite;
        animation-play-state: paused;
        &.active{
          animation-play-state: running;
        }
      }
      .h{
        float: left;
        margin-left: 10px;
        p{
          &:nth-of-type(1){
            margin-top: 15px;
            font-size: 20px;
          }
          &:nth-of-type(2) {
            font-size: 15px;
            color: #74787c;
            margin-top: 5px;
          }
        }
      }
    }
    .player-rj{
      width: 30%;
      height: 100%;
      .play{
        width: 70px;
        height: 70px;
        background: url("../../assets/images/cd.png") no-repeat;
        float: right;
      }
      .lb{
        width: 70px;
        height: 70px;
        background: url("../../assets/images/bf.png") no-repeat;
        float: right;
        margin-right: 10px;
        &.active {
          background: url("../../assets/images/zt.png") no-repeat;
        }
      }
    }
  }
  @keyframes sport {
    from{
      transform: rotate(0deg);
    }
    to{
      transform: rotate(360deg);
    }
  }
</style>
