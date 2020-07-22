<template>
    <div class="song">
      <div class="song-top">
        <h3>最新音乐</h3>
      </div>
      <ul class="song-list">
        <li v-for="value in newest" :key="value.id" @click="selectMusic(value.id)">
          <img v-lazy="value.picUrl" alt="">
          <div>
            <h3>{{value.name}}</h3>
            <p>{{value.singer}}</p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'SongList',
  props: {
    newest: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  methods: {
    ...mapActions([
      'setFullScreen',
      'isShowMiniPlayer',
      'setSongDetail'
    ]),
    selectMusic (id) {
      // this.$store.dispatch('setFullScreen', true)
      this.setFullScreen(true)
      this.isShowMiniPlayer(false)
      this.setSongDetail([id])
    }
  }
}
</script>

<style scoped lang="scss">
  .song{
    width: 100%;
    margin-top: 20px;
    .song-top{
      font-size: 20px;
    }
    .song-list{
      width: 100%;
      margin-top: 20px;
      li{
        width: 100%;
        height: 100px;
        img{
          width: 80px;
          float: left;
        }
        >div{
          margin-left: 20px;
          float: left;
          height: 100px;
          line-height: 100px;
          text-align: center;
        }
        &:last-of-type{
          padding-bottom: 100px;
        }
      }
    }
  }
</style>
