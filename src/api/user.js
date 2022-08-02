import request from "@/utils/request";

/**
 * 验证码
 * @param {String} random 4位随机数
 * @returns promise
 */
export function code(random) {
  return request({
    url: `/user-service/user/imageCode/${random}`,
    method: "GET",
    responseType: "blob",
  });
}

/**
 * 登录
 * @param {Object} data 登录的数据
 * @returns promise
 */
export function login(data) {
  return request({
    url: "/user-service/user/login",
    method: "POST",
    data,
  });
}

/**
 * 根据id获取用户详情
 * @param {*} id 
 * @returns promise
 */
 export function userinfoDateil(id) {
  return request({
    url: `/user-service/user/${id}`,
    method: 'GET',
  })
}

export function getInfo() {}

export function logout() {}
