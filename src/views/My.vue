<template>
    <div class="my">
      <div class="my-top"></div>
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
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { getBanner } from '../api/index'
export default {
  name: 'My',
  created () {
    getBanner()
      // .then((data) => {
      //   console.log(data)
      // })
      .then(function (data) {
        console.log(data)
      })
      .catch(function (err) {
        console.log(err)
      })
  }
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
    background: black;
  }
  .my-bottom{
    width: 100%;
    height: 600px;
    position: absolute;
    top: 300Px;
    left: 0;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    background: #FFFFFF;
    >.bottom-con{
      width: 95%;
      height: 100%;
      margin: 0 auto;
      background: blanchedalmond;
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
            background: dimgrey;
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
          li{
            width: 45%;
            height: 150px;
            background: darkcyan;
            &:nth-of-type(1){
              float: left;
            }
            &:nth-of-type(2){
              float: right;
            }
          }
        }
      }
    }
  }
}
</style>
