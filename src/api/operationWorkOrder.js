import request from '@/utils/request'

/**
 * 获取所有工单
 * @returns promise
 */
export function getOperationWorkOrderApi() {
  return request({
    url: '/task-service/task/search',
    method: 'GET',
  })
}
