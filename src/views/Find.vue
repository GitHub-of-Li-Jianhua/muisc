<template>
    <div class="find">
      <Scrollview>
        <div>
          <Banner :banners="banners"></Banner>
          <Scrollbar></Scrollbar>
          <Song :personalized="personalized" :title="'发现好歌单'" :title1="'查看更多'" @select="fatherSelectItem"></Song>
          <Song :personalized="albums" :title="'享受美妙音乐假日'" :title1="'播放全部'" @select="fatherSelectItem"></Song>
          <NewSongs :newest="newest"></NewSongs>
        </div>
      </Scrollview>
      <transition>
        <router-view></router-view>
      </transition>

    </div>
</template>

<script>
import { getBanner, getPersonalized, getNewAlbum, getNnewsong } from '../api/index'
import Scrollview from '../components/Scrollview'
import Banner from '../components/fx/Banner'
import Scrollbar from '../components/fx/Scrollbar'
import Song from './Song'
import NewSongs from '../components/fx/NewSongs'
export default {
  name: 'Find',
  components: {
    Scrollview,
    Banner,
    Scrollbar,
    Song,
    NewSongs
  },
  methods: {
    fatherSelectItem (id) {
      this.$router.push({
        path: `/Find/Detail/${id}`
      })
    }
  },
  data () {
    return {
      banners: [],
      personalized: [],
      albums: [],
      newest: []
    }
  },
  created () {
    getBanner()
      .then((data) => {
        this.banners = data.banners
      })
      .catch(function (err) {
        console.log(err)
      })

    getPersonalized()
      .then((data) => {
        this.personalized = data.result
      })
      .catch(function (err) {
        console.log(err)
      })

    getNewAlbum()
      .then((data) => {
        this.albums = data.albums.splice(6, 14)
      })
      .catch(function (err) {
        console.log(err)
      })

    getNnewsong()
      .then((data) => {
        this.newest = data.result
      })
      .catch(function (err) {
        console.log(err)
      })
  }
}
</script>

<style scoped lang="scss">
.find{
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  overflow: hidden;

  .v-enter{
    transform: translateX(100%);
  }
  .v-enter-to{
    transform: translateX(0%);
  }
  .v-enter-active{
    transition: all 1s;
  }
  .v-leave{
    transform: translateX(0%);
  }
  .v-leave-to{
    transform: translateX(100%);
  }
  .v-leave-active{
    transition: all 1s;
  }
}
</style>
