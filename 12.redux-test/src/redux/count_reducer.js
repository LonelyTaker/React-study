/**
 * 该文件用于创建一个为Count组件服务的reducer，reducer本质是一个函数
 * reducer函数会接到两个参数，分别是之前的状态(preState)和动作对象(action)
 */

export default function countReducer(preState = 0, action) {
  const { type, data } = action
  switch (type) {
    case "ADD":
      return preState + data
    case "SUB":
      return preState - data
    default:
      return preState
  }
}
