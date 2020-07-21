<template>
    <div class="plaver-top">
      <div class="top-fl">
        <img src="../../assets/images/zjt.png" alt="" @click="backl">
        <div class="wz">
          <p class="p6">1111111111</p>
          <p class="p7">2222</p>
        </div>
      </div>
      <div class="top-rj">
        <img src="../../assets/images/fx.png" alt="">
      </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Plavertop',
  methods: {
    ...mapActions([
      'setFullScreen',
      'isShowMiniPlayer'
    ]),
    backl () {
      this.setFullScreen(false)
      this.isShowMiniPlayer(true)
    }
  }
}
</script>

<style scoped lang="scss">
.plaver-top{
  width: 95%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 20px;
  z-index: 6000;
  .top-fl{
    img{
      width:60px;
      float: left;
      margin-top: 10px;
    }
    .wz{
      height: 100px;
      float: left;
      margin-left: 10px;
      margin-top: 20px;
      .p6{
        font-size: 25px;
      }
      .p7{
        font-size: 20px;
        opacity: 0.5;
        margin-top: 5px;
      }
    }
  }
  .top-rj{
    img{
      width: 40px;
    }
  }
}
</style>
