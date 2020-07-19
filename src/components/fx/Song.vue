<template>
  <div class="personalized">
    <div class="Find-a">
      <div class="song">
        <span class="span1">{{title}}</span>
        <span class="span2">{{title1}}</span>
      </div>
      <ul class="good-song">
        <li v-for="value in personalized" :key="value.id" @click="selectItem(value.id)">
          <img v-lazy="value.picUrl" alt="">
          <p>{{value.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Song',
  props: {
    personalized: {
      type: Array,
      default: () => [],
      required: true
    },
    title: {
      type: String,
      default: '',
      required: true
    },
    title1: {
      type: String,
      default: '',
      required: true
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
  .personalized{
    .Find-a{
      width: 100%;
      margin-top: 30px;
      .song{
        width: 95%;
        height: 30px;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        .span1{
          font-size: 25px;
        }
        .span2{
          margin-top: 5px;
          border: 1px solid #cccccc;
          padding: 0 10px;
          border-radius: 25px;
          background: white;
          height: 20px;
          font-size: 12px;
          line-height: 20px;
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
        height: 230px;
        li{
          display: inline-block;
          width: 180px;
          border-radius: 20px;
          position: relative;
          margin-left: 20px;
          img{
            width: 100%;
            border-radius: 25px;
          }
          p{
            width: 100%;
            font-size: 15px;
            text-align: center;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            margin-top: 10px;
          }
        }
      }
    }
  }
</style>
