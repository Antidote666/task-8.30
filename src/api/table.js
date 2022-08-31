import request from '@/utils/request'

export const getTabList = () => {
  return request({
    url: '/api/goods',
    method: 'GET'
  })
}
