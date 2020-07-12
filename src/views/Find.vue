<template>
    <div class="find">
      <div class="chart">
        <Banner :banners="banners"></Banner>
      </div>
      <ul class="roll">
        <router-link tag="li" class="item" to="">
          <img src="../assets/images/home.png" alt="">
          <span>每日推荐</span>
        </router-link>
        <router-link tag="li" class="item" to="">
           <img src="../assets/images/home-it666-gd.png" alt="">
          <span>歌单</span>
        </router-link>
        <router-link tag="li" class="item" to="">
           <img src="../assets/images/home-it666-phb.png" alt="">
          <span>排行榜</span>
        </router-link>
        <router-link tag="li" class="item" to="">
           <img src="../assets/images/home-it666-dt.png" alt="">
          <span>电台</span>
        </router-link>
        <router-link tag="li" class="item" to="">
           <img src="../assets/images/home-it666-zb.png" alt="">
          <span>直播</span>
        </router-link>
        <router-link tag="li" class="item" to="">
           <img src="../assets/images/home.png" alt="">
          <span>火箭留名字</span>
        </router-link>
        <router-link tag="li" class="item" to="">
          <img src="../assets/images/home.png" alt="">
          <span>数字专辑</span>
        </router-link>
        <router-link tag="li" class="item" to="">
          <img src="../assets/images/home.png" alt="">
          <span>唱聊</span>
        </router-link>
        <router-link tag="li" class="item" to="">
          <img src="../assets/images/home.png" alt="">
          <span>线上演出</span>
        </router-link>
      </ul>
      <Personalized :personalized="personalized"></Personalized>
    </div>
</template>

<script>
import { getBanner, getPersonalized } from '../api/index'
import Banner from '../components/Banner'
import Personalized from '../components/Personalized'
export default {
  name: 'Find',
  components: {
    Banner,
    Personalized
  },
  data () {
    return {
      banners: [],
      personalized: []
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
        console.log(data)
        this.personalized = data.result
      })
      .catch(function (err) {
        console.log(err)
      })
  }
}
</script>

<style scoped lang="scss">
.find{
  width: 100%;
  /*height: 700px;*/
  margin-top: 90px;
  background: blanchedalmond;
  .chart{
    width: 95%;
    margin: 0 auto;
  }
  .roll{
    width: 100%;
    white-space: nowrap;
    overflow-x: scroll;
    &::-webkit-scrollbar{
      display: none;
    }
    margin-top: 20px;
    height: 135px;
    li{
      display: inline-block;
      /*overflow: hidden;*/
      width: 90px;
      height: 90px;
      margin-right: 50px;
      border-radius: 50%;
      background: #d43c33;
      position: relative;
      top: 0;
      left: 0;
      text-align: center;
      &:nth-of-type(1){
        margin-left: 20px;
      }
      img{
        display: block;
        width: 90px;
        margin: 0 auto;
      }
      span{
        width: 90px;
        display: block;
        font-size: 20px;
        position: absolute;
        top: 100px;
        left: 0;
        margin: 0 auto;
      }
    }

  }

}
</style>
