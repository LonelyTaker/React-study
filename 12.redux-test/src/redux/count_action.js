/**
 * 该文件专门为Count组件生成Action对象
 */
export const createAddAction = (data) => ({ type: "ADD", data })
export const createSubAction = (data) => ({ type: "SUB", data })
export const createAsyncAddAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createAddAction(data))
    }, time)
  }
}
