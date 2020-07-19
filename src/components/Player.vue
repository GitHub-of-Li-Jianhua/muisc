<template>
    <div class="player">
      <div class="player-con">
        <div class="player-fl">
          <img src="../assets/images/sybj.jpg" alt="">
          <div class="h">
            <p>爱 . 沉在</p>
            <p>谁知道呢</p>
          </div>
        </div>
        <div class="player-rj">
          <img src="../assets/images/lb.png" alt="">
          <img src="../assets/images/bf.png" alt="">
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Player'
}
</script>

<style scoped lang="scss">
.player{
  width: 100%;
  height: 90px;
  position: fixed;
  left: 0;
  bottom: 0;
  border: 1px solid #cccc;
  background: white;
  z-index: 30000;
  .player-con{
    width: 96%;
    height: 100%;
    background: white;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .player-fl{
      width: 60%;
      height: 100%;
      img{
        width: 80px;
        border-radius: 50%;
        display: block;
        float: left;
        margin-top: 5px;
      }
      .h{
        float: left;
        margin-left: 10px;
        p{
          &:nth-of-type(1){
            margin-top: 15px;
            font-size: 20px;
          }
          &:nth-of-type(2) {
            font-size: 15px;
            color: #74787c;
            margin-top: 5px;
          }
        }
      }
    }
    .player-rj{
      width: 30%;
      height: 100%;
      img{
        margin-top: 5px;
        width: 70px;
        float: right;
      }
    }
  }
}
</style>
