// 获取数据方法
import http from './http'
export let getTopics = (data) => {
    return http({method: 'get',url: '/topics',data})
}

export let getTopicById=(id)=>{
    return http({method: 'get',url: `topic/${id}`})
}
export let getUserByName = data => {
    return http({
      url: `/user/${data}`,
      method: 'get'
    })
  }
