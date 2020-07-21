import { SET_FULL_SCREEN, SET_MINT_SCREEN } from './mutations-type'
export default {
  // changeFullScreen (state, flag) {
  [SET_FULL_SCREEN] (state, flag) {
    state.isFullScreen = flag
  },
  [SET_MINT_SCREEN] (state, flag) {
    state.isShowMiniPlayer = flag
  }
}
