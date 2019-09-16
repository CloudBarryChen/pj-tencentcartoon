import Axios from 'axios'

export const getAnimeList = () => {
  var url = 'http://localhost:3000/course'

  return Axios({
    method: 'get',
    url
  })
}

export const getEqualData = (id) => {
  var url = `http://localhost:3000/course?id=${id}`
  return Axios({
    method: 'get',
    url
  })
}

export const getDongmandata = () => {
  var url = 'http://localhost:3000/dataList'

  return Axios({
    method: 'get',
    url
  })
}

export const countentData = () => {
  var url = 'http://localhost:3000/doManData'

  return Axios({
    method: 'get',
    url
  })
}

// 主页面第二个数据
export const twoData = () => {
  var url = 'http://localhost:3000/twoDoMan'

  return Axios({
    method: 'get',
    url
  })
}

// 主页面第三个数据

export const threeData = () => {
  var url = 'http://localhost:3000/three'

  return Axios({
    method: 'get',
    url
  })
}

// 详情列表接口
export const getDetailList = () => {
  var url = 'http://localhost:3000/data'
  return Axios({
    method: 'get',
    url
  })
}
// 详情列表接口2
export const getDetailList2 = () => {
  var url = 'http://localhost:3000/data2'
  return Axios({
    method: 'get',
    url
  })
}
