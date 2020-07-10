<template>
    <div class="navigation">
      <div class="box">
        <div class="center">
          <div class="center-in">
            <router-link tag="div" class="item" to="/My">
              <span>我的</span>
            </router-link>
            <router-link tag="div" class="item" to="/Find">
              <span>发现</span>
            </router-link>
            <router-link tag="div" class="item" to="">
              <span>云村</span>
            </router-link>
            <router-link tag="div" class="item" to="">
              <span>视频</span>
            </router-link>
          </div>
        </div>
        <div class="left">
          <img src="../assets/images/cd.png" alt="">
        </div>
        <div class="right">
          <img src="../assets/images/ss.png" alt="">
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped lang="scss">
  .navigation{
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    .box{
      width: 95%;
      height: 100%;
      margin: 0 auto;
      .center{
        width: 100%;
        height: 80px;
        float: left;
        .center-in{
          margin: 0 80px;
          height: 80px;
          display: flex;
          justify-content: center;
          .item{
            width: 10%;
            height: 100%;
            text-align: center;
            margin: 0 30px;
            font-size: 20px;
            span{
              line-height: 80px;
            }
          }
        }
      }
      .left, .right{
        width: 80px;
        height: 80px;
        float: left;
        overflow: hidden;
        background: #FFFFFF;
      }
      .left{
        margin-left: -100%;
        img{
          width: 40px;
          margin-top: 20px;
        }
      }
      .right{
        margin-left: -80px;
        img{
          width: 40px;
          float: right;
          margin-top: 20px;
        }
      }
    }
  }
</style>
