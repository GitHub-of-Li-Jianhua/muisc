<template>
    <div class="my">
        <div class="my-top">
          <img v-lazy="account.backgroundUrl" alt="">
          <div class="theme-popover-mask"></div>
          <div class="my-top-con">
            <div class="con-top">
              <div class="top-fl">
                <img v-lazy="account.avatarUrl" alt="">
                <div class="p">
                  <p class="p1">{{account.nickname}}</p>
                  <p class="p2">Lv6</p>
                </div>
              </div>
              <div class="top-ri">
                <span>开通VIP</span>
              </div>
            </div>
            <ul class="con-bottom">
              <li>
                <img src="../assets/images/yy.png" alt="">
                <span>本地音乐</span>
              </li>
              <li>
                <img src="../assets/images/xz.png" alt="">
                <span>下载管理</span>
              </li>
              <li>
                <img src="../assets/images/dt.png" alt="">
                <span>我的电台</span>
              </li>
              <li>
                <img src="../assets/images/sc.png" alt="">
                <span>我的收藏</span>
              </li>
              <li>
                <img src="../assets/images/gz.png" alt="">
                <span>关注新歌</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="my-bottom">
          <div class="bottom-top">
            <div class="my-musin">
              <span>我的音乐</span>
              <span>音乐></span>
            </div>
            <ul>
              <li>
                <img src="../assets/images/ax.png" alt="">
                <p class="p1">我喜欢的音乐</p>
                <p class="p2">心动模式</p>
              </li>
              <li>
                <img src="../assets/images/ax.png" alt="">
                <p class="p1">我喜欢的音乐</p>
                <p class="p2">心动模式</p>
              </li>
              <li>
                <img src="../assets/images/ax.png" alt="">
                <p class="p1">我喜欢的音乐</p>
                <p class="p2">心动模式</p>
              </li>
              <li>
                <img src="../assets/images/ax.png" alt="">
                <p class="p1">我喜欢的音乐</p>
                <p class="p2">心动模式</p>
              </li>
              <li>
                <img src="../assets/images/ax.png" alt="">
                <p class="p1">我喜欢的音乐</p>
                <p class="p2">心动模式</p>
              </li>
            </ul>
          </div>
          <div class="bottom-bottom">
            <div class="my-musin1">
              <span>创建歌单</span>
              <span><img src="../assets/images/gs.png" alt=""></span>
            </div>
            <ul class="details">
              <li class="clearfix" v-for="value in comment" :key="value.id" @click="selectItem1(value.id)">
                <img v-lazy="value.coverImgUrl" alt="">
                <div class="details-ri">
                  <p>{{value.name}}</p>
                  <p>{{value.playCount}}首</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      <router-view></router-view>
    </div>
</template>

<script>
import { getLogin, getUser } from '../api/index'
// import Scrollview from '../components/Scrollview'
import { mapActions } from 'vuex'
export default {
  name: 'My',
  components: {
    // Scrollview
  },
  data () {
    return {
      account: [],
      comment: []
    }
  },
  created () {
    getLogin()
      .then((data) => {
        this.account = data.profile
      })
      .catch(function (err) {
        console.log(err)
      })

    getUser()
      .then((data) => {
        this.comment = data.playlist
      })
      .catch(function (err) {
        console.log(err)
      })
  },
  methods: {
    ...mapActions([
      'setSongDetail'
    ]),
    selectItem1 (id) {
      this.$router.push({
        path: `/My/Detail/${id}`
      })
      this.setSongDetail([id])
    }
  }
}
</script>

<style scoped lang="scss">
  .my{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    .my-top{
      width: 100%;
      height: 400px;
      background: #74787c;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
        background-size: cover;
        overflow: hidden;
      }
      .theme-popover-mask {
        z-index: 8;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 500px;
        background: #3B3B3B;
        opacity: 0.7;
      }
      .my-top-con{
        position: absolute;
        top: 80px;
        left: 15px;
        width: 95%;
        height: 100%;
        z-index: 120;
        .con-top{
          width: 100%;
          height: 100px;
          /*margin-top: 20px;*/
          display: flex;
          justify-content: space-between;
          .top-fl{
            width: 60%;
            height: 100%;
            img{
              width: 90px;
              height: 90px;
              border-radius: 50%;
              margin-top: 20px;
              float: left;
            }
            .p{
              width: 200px;
              height: 100%;
              margin-left: 15px;
              float: left;
              .p1{
                width: 100%;
                font-size: 25px;
                margin-top: 30px;
                color: white;
              }
              .p2{
                width: 60px;
                height: 30px;
                background: #74787c;
                margin-top: 10px;
                font-size: 20px;
                border-radius: 25px;
                text-align: center;
                line-height: 30px;
                color: white;
              }
            }
          }
          .top-ri{
            width: 30%;
            height: 100%;
            span{
              float: right;
              line-height: 130px;
              opacity: 0.5;
            }
          }
        }
        .con-bottom{
          width: 100%;
          height: 120px;
          margin-top: 40px;
          display: flex;
          justify-content: space-between;
          li{
            width: 15%;
            height: 100%;
            img{
              width: 60px;
              height: 60px;
              display: block;
              margin: 0 auto;
            }
            span{
              margin-top: 10px;
              display: block;
              width: 100%;
              font-size: 20px;
              text-align: center;
              color: white;
            }
          }
        }
      }
    }
    .my-bottom{
      width: 100%;
      height: 600px;
      position: absolute;
      top: 350px;
      left: 0;
      background: white;
      border-top-left-radius: 30px;
      border-top-right-radius: 30px;
      z-index: 140;
      .bottom-top{
        .my-musin{
          width: 95%;
          margin: 25px auto;
          display: flex;
          justify-content: space-between;
          span{
            &:nth-of-type(1){
              font-size: 20px;
            }
          }
        }
        >ul{
          width: 100%;
          white-space: nowrap;
          overflow-x: scroll;
          &::-webkit-scrollbar{
            display: none;
          }
          margin-top: 20px;
          li{
            display: inline-block;
            overflow: hidden;
            width: 210px;
            height: 250px;
            background: #3333;
            margin-right: 20px;
            border-radius: 20px;
            &:nth-of-type(1){
              margin-left: 20px;
            }
            position: relative;
            img{
              width: 70px;
              position: absolute;
              top: 20%;
              left: 35%;
            }
            >.p1{
              margin-top: 10px;
              position: absolute;
              top: 50%;
              left: 35%;
            }
            >.p2{
              position: absolute;
              width: 75px;
              height: 25px;
              left: 33%;
              bottom: 5%;
              color: white;
              text-align: center;
              background: #74787c;
              border-radius: 20px;
              line-height: 25px;
            }
          }
        }
      }
      .bottom-bottom{
        .my-musin1{
          width: 95%;
          margin: 25px auto;
          display: flex;
          justify-content: space-between;
          span{
            &:nth-of-type(1){
              font-size: 20px;
            }
            &:nth-of-type(2){
              img{
                width: 40px;
              }
            }
          }
        }
        .details{
          width: 95%;
          /*height: 300px;*/
          margin: 0 auto;
          li{
            float: left;
            width: 50%;
            height: 90px;
            margin-bottom: 15px;
            &:last-of-type{
              padding-bottom: 100px;
            }
            img{
              width: 80px;
              border-radius: 10px;
              float: left;
            }
            .details-ri{
              float: left;
              margin-left: 10px;
              p{
                &:nth-of-type(1){
                  font-size: 20px;
                }
                &:nth-of-type(2){
                  margin-top: 5px;
                  opacity: 0.5;
                  font-size: 15px;
                }
              }
            }
          }
        }
      }
    }
  }

</style>
