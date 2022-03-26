export const add = (data) => ({
  type: "ADD",
  data,
})
export const sub = (data) => ({
  type: "SUB",
  data,
})
export const add_async = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(add(data))
    }, time)
  }
}
