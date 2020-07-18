<template>
    <div class="find">
      <Scrollview>
        <div>
          <Banner :banners="banners"></Banner>
          <ul>
            <li>
              <img src="../assets/images/home.png" alt="">
              <span>每日推荐</span>
            </li>
            <li>
              <img src="../assets/images/gd.png" alt="">
              <span>歌单</span>
            </li>
            <li>
              <img src="../assets/images/phb.png" alt="">
              <span>排行榜</span>
            </li>
            <li>
              <img src="../assets/images/dt.png" alt="">
              <span>电台</span>
            </li>
            <li>
              <img src="../assets/images/zb.png" alt="">
              <span>直播</span>
            </li>
          </ul>
        </div>
      </Scrollview>
    </div>
</template>

<script>
import { getBanner } from '../api/index'
import Scrollview from '../components/Scrollview'
import Banner from '../components/Banner'
export default {
  name: 'Find',
  components: {
    Scrollview,
    Banner
  },
  data () {
    return {
      banners: []
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
  ul{
    width: 100%;
    height: 130px;
    white-space: nowrap;
    overflow-x: scroll;
    &::-webkit-scrollbar{display: none;}
    display: flex;
    justify-content: space-between;
    li{
      width: 90px;
      height: 90px;
      background: #d43c33;
      border-radius: 50%;
      img{
        display: block;
        width: 90px;
      }
    }

  }
}
</style>
