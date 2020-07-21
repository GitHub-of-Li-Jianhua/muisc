import { SET_FULL_SCREEN, SET_MINT_SCREEN } from './mutations-type'
export default {
  setFullScreen ({ commit }, flag) {
    // commit('changeFullScreen', flag)
    commit(SET_FULL_SCREEN, flag)
  },
  isShowMiniPlayer ({ commit }, flag) {
    // commit('changeFullScreen', flag)
    commit(SET_MINT_SCREEN, flag)
  }
}
