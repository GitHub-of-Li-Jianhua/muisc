<template>
  <ul class="roll">
    <router-link tag="li" class="item" to="">
      <div>
        <img src="../../assets/images/home.png" alt="">
      </div>
      <span>每日推荐</span>
    </router-link>
    <router-link tag="li" class="item" to="">
      <div>
        <img src="../../assets/images/gd.png" alt="">
      </div>
      <span>歌单</span>
    </router-link>
    <router-link tag="li" class="item" to="">
      <div>
        <img src="../../assets/images/phb.png" alt="">
      </div>
      <span>排行榜</span>
    </router-link>
    <router-link tag="li" class="item" to="">
    <div>
      <img src="../../assets/images/dt.png" alt="">
    </div>
    <span>电台</span>
  </router-link>
    <router-link tag="li" class="item" to="">
      <div>
        <img src="../../assets/images/zb.png" alt="">
      </div>
      <span>直播</span>
    </router-link>
    <router-link tag="li" class="item" to="">
      <div>
        <img src="../../assets/images/home.png" alt="">
      </div>
      <span>火箭留名字</span>
    </router-link>
    <router-link tag="li" class="item" to="">
      <div>
        <img src="../../assets/images/dt.png" alt="">
      </div>
      <span>电台</span>
    </router-link>
    <router-link tag="li" class="item" to="">
      <div>
        <img src="../../assets/images/zb.png" alt="">
      </div>
      <span>直播</span>
    </router-link>
    <router-link tag="li" class="item" to="">
      <div>
        <img src="../../assets/images/home.png" alt="">
      </div>
      <span>火箭留名字</span>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'Scrollbar'
}
</script>

<style scoped lang="scss">
  .roll{
    width: 100%;
    white-space: nowrap;
    overflow-x: scroll;
    &::-webkit-scrollbar{display: none;}
    margin-top: 10px;
    li{
      display: inline-block;
      width: 90px;
      height: 90px;
      border-radius: 50%;
      margin-right: 30px;
      background: #d43c33;
      margin-left: 20px;
      >div{
        width: 100%;
        height: 90px;
        img{
          width: 90px;
        }
      }
      span{
        display: block;
        width: 100%;
        text-align: center;
        margin-top: 8px;
      }
    }

  }
</style>
