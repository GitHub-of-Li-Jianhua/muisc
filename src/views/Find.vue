<template>
    <div class="find">
      <Scrollview>
        <div>
          <Banner :banners="banners"></Banner>
          <Scrollbar></Scrollbar>
          <Song :personalized="personalized" :title="'发现好歌单'" :title1="'查看更多'"></Song>
          <Song :personalized="albums" :title="'享受美妙音乐假日'" :title1="'播放全部'"></Song>
          <NewSongs :newest="newest"></NewSongs>
        </div>
      </Scrollview>
    </div>
</template>

<script>
import { getBanner, getPersonalized, getNewAlbum, getNnewsong } from '../api/index'
import Scrollview from '../components/Scrollview'
import Banner from '../components/Banner'
import Scrollbar from '../components/fx/Scrollbar'
import Song from '../components/fx/Song'
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
        this.albums = data.albums.splice(0, 6)
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
  /*overflow: auto;*/
}
</style>
