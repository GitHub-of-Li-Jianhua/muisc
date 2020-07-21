<template>
  <div class="player-bottom">
    <div class="bottom-progress">
      <span>00:00</span>
      <div class="progress-bar">
        <div class="progress-line">
          <div class="progress-dot"></div>
        </div>
      </div>
      <span ref="eleTotalTime">00:00</span>
    </div>
    <div class="bottom-controll">
      <div class="mode loop"></div>
      <div class="prev"></div>
      <div class="play"></div>
      <div class="next"></div>
      <div class="favorite"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Playerbottom'
}
</script>

<style scoped lang="scss">
  .player-bottom{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 3000000;
    .bottom-progress{
      width: 80%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span{
      }
      .progress-bar{
        width: 100%;
        margin: 0 10px;
        height: 10px;
        background: #fff;
        .progress-line{
          width: 0%;
          height: 100%;
          background: #ccc;
          position: relative;
          .progress-dot{
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #fff;
            position: absolute;
            left: 100%;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
    }
    .bottom-controll{
      width: 80%;
      margin: 0 auto;
      padding: 40px 90px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      div{
        width: 64px;
        height: 64px;
      }
      .mode{
        background: url("../../assets/images/lbbf.png") no-repeat;
      }
      .prev{
        background: url("../../assets/images/sys.png") no-repeat;
      }
      .play{
        width: 128px;
        height: 128px;
        background: url("../../assets/images/bfl.png") no-repeat;
      }
      .next{
        background: url("../../assets/images/xys.png") no-repeat;
      }
      .favorite{
        background: url("../../assets/images/cd.png") no-repeat;
      }
    }
  }
</style>
