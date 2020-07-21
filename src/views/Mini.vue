<template>
    <div class="Mini" v-show="this.isShowMiniPlayer">
      <mi></mi>
    </div>
</template>

<script>
import mi from '../components/player/mi'
import { mapGetters } from 'vuex'
export default {
  name: 'Mini',
  components: {
    mi
  },
  computed: {
    ...mapGetters([
      'isShowMiniPlayer'
    ])
  }
}
</script>

<style scoped lang="scss">
.Mini{
  width: 100%;
  height: 90px;
  position: fixed;
  left: 0;
  bottom: 0;
  border: 1px solid #cccc;
  background: white;
  z-index: 3000;

}
</style>
