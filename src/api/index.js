import Network from './network'
// 封装各种接口请求

// ?cookie=MUSIC_U=552b21ed7410bd66ab75d2e7105b9a7253cd192a22cecac74df2cfeee95c301a9cb4377b2d7ba249;%20Expires=Mon,%2003-Aug-2020%2003:20:31%20GMT;%20Path=/;__remember_me=true;%20Expires=Mon,%2003-Aug-2020%2003:20:31%20GMT;%20Path=/;__csrf=ddbec540da1f59f7b5c7d9dabd59e2ed;%20Expires=Mon,%2003-Aug-2020%2003:20:41%20GMT;%20Path=/
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

// 专辑
export const getNewAlbum = () => Network.get('album/newest')

// 最新音乐
export const getNnewsong = () => Network.get('/personalized/newsong')
export const getDetail = (data) => Network.get('/playlist/detail', data)
