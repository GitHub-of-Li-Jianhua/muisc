<template>
  <swiper :options="swiperOption" class="banner">
    <!-- slides -->
    <swiper-slide class="cd">
      <div class="cd-wrapper" ref="cdWrapper">
        <img :src="currentSong.picUrl" alt="">
      </div>
      <p>{{getFirstLyric()}}</p>
    </swiper-slide>
    <swiper-slide class="lyric" ref="lyric">
      <Scrollview>
        <ul>
          <li v-for="(value, index) in  currentLyric" :key="index">{{value}}</li>
        </ul>
      </Scrollview>
    </swiper-slide>

  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Scrollview from '../Scrollview'
import { mapGetters } from 'vuex'
export default {
  name: 'Playercon',
  components: {
    swiper,
    swiperSlide,
    Scrollview
  },
  data () {
    return {
      swiperOption: {
        // 如果需要分页器
        observer: true,
        observeParents: true,
        observeSlideChildren: true
      }
    }
  },
  computed: {
    ...mapGetters([
      'isPlaying',
      'currentSong',
      'currentLyric'
    ])
  },
  watch: {
    isPlaying (newValue, oldValue) {
      if (newValue) {
        this.$refs.cdWrapper.classList.add('active')
      } else {
        this.$refs.cdWrapper.classList.remove('active')
      }
    }
  },
  methods: {
    getFirstLyric () {
      for (const key in this.currentLyric) {
        return this.currentLyric[key]
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .banner{
    position: fixed;
    top: 150px;
    bottom: 250px;
    left: 0;
    right: 0;
    .cd{
      .cd-wrapper{
        display: block;
        margin:  0 auto;
        width: 400px;
        height: 400px;
        border-radius: 50%;
        border: 30px solid #fff;
        overflow: hidden;
        animation: sport 5s linear infinite;
        animation-play-state: paused;
        margin-top: 200px;
        &.active{
          animation-play-state: running;
        }
        img{
          width: 100%;
          height: 100%;
        }
      }
      p{
        text-align: center;
        margin-top: 50px;
      }
    }
    .lyric{
      li{
        text-align: center;
        margin: 10px 0;
        &:last-of-type{
          padding-bottom: 50%;
        }
        &.active{
          color: #fff;
        }
      }
    }

  }
  @keyframes sport {
    from{
      transform: rotate(0deg);
    }
    to{
      transform: rotate(360deg);
    }
  }
</style>
