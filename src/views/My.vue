<template>
    <div class="my">
      <div class="my-top">
        <div class="top-s">
          <div class="details">
            <div class="k">
            <img src="../assets/images/sybj.jpg" alt="">
            </div>
            <div class="l">
              <p>双子星意</p>
              <p>LV.6</p>
            </div>
          </div>
          <div class="Opening">
            开通
          </div>
        </div>
        <div class="top-x">
          <ul>
            <li>
              <img src="../assets/images/yy.png" alt="">
              <p>本地音乐</p>
            </li>
            <li>
              <img src="../assets/images/yy.png" alt="">
              <p>下载管理</p>
            </li>
            <li>
              <img src="../assets/images/yy.png" alt="">
              <p>我的电台</p>
            </li>
            <li>
              <img src="../assets/images/yy.png" alt="">
              <p>我的收藏</p>
            </li>
            <li>
              <img src="../assets/images/yy.png" alt="">
              <p>关注新歌</p>
            </li>
          </ul>
        </div>
        <div class="theme-popover-mask"></div>
      </div>
      <div class="my-bottom">
        <div class="bottom-con">
          <div class="nav1">
            <h3>
              <span>我的音乐</span>
              <span>音乐</span>
            </h3>
            <ul>
              <li>
                <img src="../assets/images/ax.png" alt="">
                <p>我喜欢的音乐</p>
              </li>
              <li>
                <img src="../assets/images/ax.png" alt="">
                <p>我喜欢的音乐</p>
              </li>
              <li>
                <img src="../assets/images/ax.png" alt="">
                <p>我喜欢的音乐</p>
              </li>
              <li>
                <img src="../assets/images/ax.png" alt="">
                <p>我喜欢的音乐</p>
              </li>
              <li>
                <img src="../assets/images/ax.png" alt="">
                <p>我喜欢的音乐</p>
              </li>
            </ul>
          </div>
          <div class="nav2">
            <h3>
              <span>最近播放</span>
              <span>更多></span>
            </h3>
            <ul>
              <li>
              <img src="../assets/images/sybj.jpg" alt="">
              <div class="v">
                <p>全部已播歌曲</p>
                <p>256首</p>
              </div>
            </li>
              <li>
                <img src="../assets/images/sybj.jpg" alt="">
                <div class="v">
                  <p>全部已播歌曲</p>
                  <p>256首</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="nav3">
            <h3>
              <span>创建歌单</span>
              <span><img src="../assets/images/gs.png" alt=""></span>
            </h3>
            <ul>
              <li>
              <img src="../assets/images/sybj.jpg" alt="">
              <div class="v">
                <p>全部已播歌曲</p>
                <p>256首</p>
              </div>
            </li>
              <li>
                <img src="../assets/images/sybj.jpg" alt="">
                <div class="v">
                  <p>全部已播歌曲</p>
                  <p>256首</p>
                </div>
              </li>
              <li>
                <img src="../assets/images/sybj.jpg" alt="">
                <div class="v">
                  <p>全部已播歌曲</p>
                  <p>256首</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'My'
}
</script>

<style scoped lang="scss">
.my{
  width: 100%;
  height: 100%;
  position: relative;
  top: 82px;
  left: 0;
  background: dimgrey;
  .my-top{
    width: 100%;
    height: 330px;
    background: url("../assets/images/sybj.jpg") no-repeat 0 0;
    background-size: cover;
    overflow: hidden;
    .theme-popover-mask {
      z-index: 98;
      position: fixed;
      top: 80px;
      left: 0;
      width: 100%;
      height: 330px;
      background: #000;
      opacity: 0.6;
    }
    .top-s{
      width: 95%;
      height: 120px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      position: relative;
      top: 20px;
      left: 0;
      z-index: 120;
      .details{
        margin-top: 25px;
        img{
          width: 80px;
          border-radius: 50%;
        }
        .l{
          position: absolute;
          left: 90px;
          top: 20px;
          p{
            &:nth-of-type(1){
              font-size: 25px;
              margin-top: 10px;
              color: #FFFFFF;
            }
            &:nth-of-type(2){
              font-size: 20px;
              margin-top: 20px;
              /*opacity: 0.7;*/
              background: #ccc;
              text-align: center;
              border-radius: 30px;
              width: 60px;
              color: #FFFFFF;
            }
          }
        }
      }
      .Opening{
        margin-top: 35px;
        font-size: 20px;
        color: #cccc;
      }
    }
    .top-x{
      /*margin-top: 40px;*/
      width: 100%;
      height: 50px;
      position: relative;
      top: 40px;
      left: 0;
      z-index: 120;
      ul{
        display: flex;
        justify-content: space-around;
        li{
          width: 15%;
          height: 80px;
          font-size: 20px;
          /*background: darkcyan;*/
          color: #cccccc;
          img{
            display: block;
            width: 45px;
            margin: 0 auto;
          }
          p{
            margin-top: 15px;
            text-align: center;
          }
        }
      }
    }
  }
  .my-bottom{
    width: 100%;
    /*height: 600px;*/
    position: absolute;
    top: 450Px;
    left: 0;
    z-index: 130;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    background: #FFFFFF;
    >.bottom-con{
      width: 95%;
      margin: 0 auto;
      .nav1{
        >h3{
          margin-top: 15px;
          display: flex;
          justify-content: space-between;
          font-size: 20px;
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
            height: 300px;
            background: #3333;
            margin-right: 20px;
            border-radius: 20px;
            position: relative;
            top: 0;
            left: 0;
            img{
              width: 80px;
              position: absolute;
              left: 50%;
              top: 45%;
              transform: translate(-50%, -50%);
            }
            p{
              font-size: 18px;
              position: absolute;
              left: 50%;
              top: 65%;
              transform: translate(-50%, -65%);
            }
          }
        }
      }
      .nav2{
        >h3{
          margin-top: 15px;
          display: flex;
          justify-content: space-between;
          font-size: 20px;
        }
        >ul{
          margin-top: 20px;
          li{
            position: relative;
            width: 45%;
            height: 90px;
            /*background: darkcyan;*/
            &:nth-of-type(1){
              float: left;
            }
            &:nth-of-type(2){
              float: right;
            }
            img{
              width: 90px;
              border-radius: 10px;
            }
            .v{
              position: absolute;
              left: 100px;
              top: 20px;
              p{
                font-size: 20px;
                &:nth-of-type(2){
                  margin-top: 10px;
                  font-size: 18px;
                }
              }
            }
          }
        }
      }
      .nav3{
        margin-top: 160px;
        >h3{
          margin-top: 15px;
          display: flex;
          justify-content: space-between;
          font-size: 20px;
          img{
            width: 40px;
          }
        }
        >ul{
          >li{
            position: relative;
            width: 45%;
            height: 90px;
            float: left;
            margin-top: 20px;
            &:nth-of-type(1){
              float: left;
            }
            &:nth-of-type(2){
              float: right;
            }
            img{
              width: 90px;
              border-radius: 10px;
            }
            .v{
              position: absolute;
              left: 100px;
              top: 20px;
              >p{
                font-size: 20px;
                &:nth-of-type(2){
                  margin-top: 10px;
                  font-size: 18px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
