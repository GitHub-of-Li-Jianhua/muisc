import Network from './network'
// 封装各种接口请求

// 登录
export const getLogin = () => Network.post('/login/cellphone?phone=18214603749&password=2358338276@l')
export const getUser = () => Network.post('/user/playlist?uid=484834627')

// 登录
// export const getLogin = () => Network.post('/login/cellphone?phone=15987993690&password=q13769824742')
// export const getUser = () => Network.post('/user/playlist?uid=416117532')

// 轮播图
export const getBanner = () => Network.get('/banner?type=2')

// 推荐歌单
export const getPersonalized = () => Network.get('personalized?limit=6')

// export const getNewAlbum = () => Network.get('album/newest')
