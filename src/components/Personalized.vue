<template>
    <div class="personalized">
      <div class="Find-a">
        <div class="song">
          <span>发现好歌单</span>
          <span>查看更多</span>
        </div>
        <ul class="good-song">
          <li v-for="value in personalized" :key="value.id">
            <img :src="value.picUrl" alt="">
            <p>{{value.name}}</p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Personalized',
  props: {
    personalized: {
      type: Array,
      default: () => [],
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/css/base";
.personalized{
.Find-a{
  width: 100%;
  /*height: 200px;*/
  margin-top: 30px;
.song{
  width: 95%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
span{
&:nth-of-type(1){
   font-size: 25px;
 }
&:nth-of-type(2){
   width: 100px;
   height: 30px;
   background: #ffffff;
   font-size: 20px;
   border: 1px solid #ccc;
   text-align: center;
   border-radius: 40px;
 }
}
}
.good-song{
  width: 100%;
  white-space: nowrap;
  overflow-x: scroll;
&::-webkit-scrollbar{
   display: none;
 }
margin-top: 20px;
  height: 300px;
li{
  display: inline-block;
  width: 180px;
  margin-right: 50px;
  border-radius: 20px;
  position: relative;
&:nth-of-type(1){
   margin-left: 20px;
 }
    img{
      width: 100%;
      border-radius: 25px;
    }
    p{
      width: 100%;
      font-size: 15px;
      text-align: center;
      position: absolute;
      top: 105%;
      left: 0;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
  }
}
}
}
}
</style>
