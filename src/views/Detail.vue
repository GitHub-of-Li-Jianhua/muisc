<template>
<div class="detail">
  <div class="top">
    <div class="top-fl" @click="back">
      <img src="../assets/images/zjt.png" alt="">
      <span>歌单</span>
    </div>
    <div class="top-rj">
      <img src="../assets/images/ss.png" alt="">
      <img src="../assets/images/gs.png" alt="">
    </div>
  </div>
  <Scrollview>
    <div class="com">
      <div class="detail-top">
        <div class="detail-top-fl">
          <img v-lazy="playlist.coverImgUrl" alt="">
        </div>
        <div class="detail-top-rj">
          <p class="p1">{{playlist.name}}</p>
          <p class="p2">
<!--            <img v-lazy="playlist.creator.backgroundUrl" alt="">-->
<!--            <span>{{playlist.creator.nickname}}></span>-->
          </p>
          <p class="p3">{{playlist.description}}</p>
        </div>
        <div class="detail-top-bottom">
          <ul>
            <li>42</li>
            <li>42</li>
            <li>下载</li>
            <li>多选</li>
          </ul>
        </div>
      </div>
      <div class="detail-bottom">
        <ul>
         <li class="bottom-top">
           <div class="bo-fl">
             <img src="../assets/images/bf.png" alt="">
             <span>播放全部</span>
           </div>
           <div class="bo-rj">
             <span>+ 收藏(2222)</span>
           </div>
         </li>
          <li v-for="value in playlistl" :key="value.id" @click="selectMusicl">
            <span class="span1">1</span>
            <div class="bottom-fl">
              <p class="p4">{{value.al.name}}</p>
              <p class="p5">{{value.ar[0].name}}</p>
            </div>
            <div class="bottom-rj">
              <img src="../assets/images/sp.png" alt="">
              <img src="../assets/images/gs.png" alt="">
            </div>
          </li>
        </ul>
      </div>
    </div>
  </Scrollview>
</div>
</template>

<script>
import Scrollview from '../components/Scrollview'
import { getDetail } from '../api/index'
import { mapActions } from 'vuex'
// import $ from 'jquery'
export default {
  name: 'Detail',
  components: {
    Scrollview
  },
  data: function () {
    return {
      playlist: [],
      playlistl: []
    }
  },
  created () {
    getDetail({ id: this.$route.params.id })
      .then((data) => {
        this.playlist = data.playlist
        this.playlistl = data.playlist.tracks
      })
      .catch(function (err) {
        console.log(err)
      })
  },
  methods: {
    ...mapActions([
      'isShowMiniPlayer'
    ]),
    back () {
      window.history.back()
    },
    selectMusicl () {
      this.$store.dispatch('setFullScreen', true)
      this.isShowMiniPlayer(false)
    }
  }
}
</script>

<style scoped lang="scss">
.detail{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 400;
  background: white;
  .top{
    width: 95%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 20px;
    z-index: 60;
    .top-fl{
      img{
        width: 70px;
        float: left;
      }
      span{
        font-size: 25px;
        float: left;
        margin-top: 17%;
        margin-left: 20px;
        color: white;
      }
    }
    .top-rj{
      img{
        width: 70px;
      }
    }
  }
  .detail-top{
    width: 100%;
    height: 500px;
    background: #5a629f;
    .detail-top-fl{
      float: left;
      width: 250px;
      height: 250px;
      margin-top: 80px;
      margin-left: 20px;
      img{
        width: 100%;
        border-radius: 10px;
      }
    }
    .detail-top-rj{
      float: left;
      width: 420px;
      height: 250px;
      margin-top: 80px;
      margin-left: 20px;
      .p1{
        font-size: 35px;
        color: white;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      }
      .p2{
        margin-top: 20px;
        img{
          width: 50px;
          border-radius: 50%;
          float: left;
        }
        span{
          float: left;
          margin-left: 10px;
          margin-top: 12px;
        }
      }
      .p3{
        margin-top: 130px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
    }
    .detail-top-bottom{
      width: 85%;
      height: 70px;
      background: chartreuse;
      float: left;
      margin-top: 20px;
      margin-left: 50px;
      ul{
        display: flex;
        justify-content: space-between;
        li{}
      }
    }
  }
  .detail-bottom{
    width: 100%;
    background: white;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    position: relative;
    top: -50px;
    left: 0;
    ul{
      width: 95%;
      margin: 0 auto;
      >.bottom-top{
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: space-between;
        .bo-fl{
          img{
            float: left;
            width: 50px;
            margin-top: 20px;
          }
          span{
            display: block;
            width: 100px;
            font-size: 20px;
            float: left;
            margin-left: 15px;
            margin-top: 30px;
          }
        }
        .bo-rj{
          width: 150px;
          height: 80px;
          border-radius: 50px;
          background: #d43c33;
          span{
            display: block;
            text-align: center;
            line-height: 80px;
            color: white;
            font-size: 15px;
          }
        }
      }
      >li{
        width: 100%;
        height: 80px;
        margin-bottom: 15px;
        >span{
          display: block;
          width: 40px;
          height: 100%;
          float: left;
          font-size: 35px;
          line-height: 80px;
          text-align: center;
        }
        .bottom-fl{
          float: left;
          margin-left: 20px;
          width: 500px;
          height: 100%;
          background: white;
          .p4{
            font-size: 30px;
          }
          .p5{
            font-size: 20px;
            opacity: 0.6;
            margin-top: 5px;
          }
        }
        .bottom-rj{
          float: right;
          img{
            margin-top: 18px;
            width: 40px;
          }
        }
        &:nth-of-type(2){
          margin-top: 20px;
        }
      }
    }
  }
}
</style>
